const scriptCreator = (url) => {
    const scriptTag = document.createElement('script');
    scriptTag.src = url;
    scriptTag.type = "text/javascript";
    scriptTag.setAttribute("async","");
    scriptTag.setAttribute("defer","");

    return scriptTag;
};

// Will enable for future use
// const linkCreator = (url) => {
//     const linkTag = document.createElement('link');
//     linkTag.href = url;
//     linkTag.type = "text/css";
//     linkTag.rel = "stylesheet";
//
//     return linkTag;
// };

const styleCreator = (css) => {
    const styleTag = document.createElement('style');
    styleTag.innerHTML = css;

    return styleTag;
};

const isExtension = (ext) => (url) => url.slice(-ext.length).indexOf(ext) !== -1;
const isCss = isExtension('css');
const isJs = isExtension('js');

window.importer = function (sources, settings={}){
    return new Promise((resolve, reject) => {

        const cssSources = sources.filter(url => isCss(url));
        const jsSources = sources.filter(url => isJs(url));
        let jsLength = jsSources.length;

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
            document.body.appendChild(scriptTag);
        }));

        // Ensures that the js is loaded sequentially
        promiseJsSources.reduce((p, fn) => p.then(fn), Promise.resolve());

        //CSS resources
        cssSources.forEach(url => fetch(url).then(data => {
            return data.text();
        }).then(cssStr => {
            document.head.appendChild(styleCreator(cssStr));
        }).catch(error => {
            reject(error);
        }));
    });
};