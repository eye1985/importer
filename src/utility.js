const isExtension = (ext) => (url) => url.slice(-ext.length).indexOf(ext) !== -1;

export const isCss = isExtension('css');
export const isJs = isExtension('js');

export const createUrlObj = sources => sources.reduce((acc, url) => {
    const urlParamSplit = url.split("?");
    let extension = null;

    if(isCss(urlParamSplit[0])){
        extension = "css";
    }

    if(isJs(urlParamSplit[0])){
        extension = "js";
    }

    if(extension !== null){
        acc.push({
            url : urlParamSplit[0],
            param : urlParamSplit[1]?urlParamSplit[1]:"",
            type : extension
        });
    }

    return acc;
},[]);