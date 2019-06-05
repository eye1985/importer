//Polyfills
import 'promise-polyfill/src/polyfill';
import 'whatwg-fetch';

import { scriptCreator, styleCreator } from './creator';
import { createUrlObj } from './utility';

export default function(sources, settings={}){

    const defaultSettings = {
        useScriptType : false
    };

    const configSettings = Object.assign({}, defaultSettings, settings);
    const {useScriptType} = configSettings;

    return new Promise((resolve, reject) => {

        const cssSources = createUrlObj(sources).filter(source => source.type === "css");
        const jsSources = createUrlObj(sources).filter(source => source.type === "js");
        let jsLength = jsSources.length;

        //CSS resources
        cssSources.forEach(urlObj => {
            const params = urlObj.param.trim().length > 0 ? `?${urlObj.param}`:"";

            fetch(urlObj.url + params).then(response => {
                if(!response.ok){
                    return reject(response.statusText);
                }

                return response.text();
            }).then(cssStr => {
                document.head.appendChild(styleCreator(cssStr));
            }).catch(error => {
                reject(error);
            });
        });

        //JS resources
        const promiseJsSources = jsSources.map(urlObj => () => new Promise((res, rej) => {
            const params = urlObj.param.trim().length > 0 ? `?${urlObj.param}`:"";
            const scriptTag = scriptCreator(urlObj.url + params,useScriptType);

            scriptTag.onload = () => {
                res();
                jsLength--;

                if(jsLength === 0){
                    resolve();
                }
            };

            scriptTag.onerror = () => {
                rej();

                if(jsLength === 0){
                    reject("Error loading script");
                }
            };

            document.body.appendChild(scriptTag);
        }));

        // Ensures that the js is loaded sequentially
        promiseJsSources.reduce((p, fn) => p.then(fn), Promise.resolve());
    });
}