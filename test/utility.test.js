import { isJs, isCss, createUrlObj } from '../src/utility';

describe("Utility", () => {
    const jsUrl = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js";
    const cssUrl = "https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.css";

    it("should check if file extention is js based on url", () => {
        expect(isJs(jsUrl)).toBeTruthy();
    });

    it("should check if file extention is css based on url", () => {
        expect(isCss(cssUrl)).toBeTruthy();
    });

    it("should transform url into object with three parameters: url, param and type", () => {
        const urls = [jsUrl,jsUrl + "?version1.0",cssUrl];

        expect(createUrlObj(urls)).toEqual([
            {
                url:jsUrl,
                param:"",
                type:"js"
            },
            {
                url:jsUrl,
                param:"version1.0",
                type:"js"
            },
            {
                url:cssUrl,
                param:"",
                type:"css"
            }
        ]);
    });
});