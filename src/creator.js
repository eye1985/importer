export const scriptCreator = (url) => {
    const scriptTag = document.createElement('script');

    scriptTag.src = url;
    scriptTag.type = "text/javascript";
    scriptTag.setAttribute("async","");
    scriptTag.setAttribute("defer","");

    return scriptTag;
};

export const linkCreator = (url) => {
    const linkTag = document.createElement('link');
    linkTag.href = url;
    linkTag.type = "text/css";
    linkTag.rel = "stylesheet";

    return linkTag;
};

export const styleCreator = (css) => {
    const styleTag = document.createElement('style');
    styleTag.innerHTML = css;

    return styleTag;
};

