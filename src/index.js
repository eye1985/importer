//Polyfills
import 'promise-polyfill/src/polyfill';
import 'whatwg-fetch';

import { scriptCreator, styleCreator } from './creator';
import { isCss, isJs } from './utility';

export default function(sources, settings={}){
    return new Promise((resolve, reject) => {

        const cssSources = sources.filter(url => isCss(url));
        const jsSources = sources.filter(url => isJs(url));
        let jsLength = jsSources.length;

        //CSS resources
        cssSources.forEach(url => fetch(url).then(response => {
            if(!response.ok){
                return reject(response.statusText);
            }

            return response.text();
        }).then(cssStr => {
            document.head.appendChild(styleCreator(cssStr));
        }).catch(error => {
            reject(error);
        }));

        //JS resources
        const promiseJsSources = jsSources.map(url => () => new Promise((res, rej) => {
            const scriptTag = scriptCreator(url);

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