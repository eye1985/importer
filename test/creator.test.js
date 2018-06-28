require('browser-env')();
import { styleCreator, scriptCreator, linkCreator } from '../src/creator';


let cssUrl;

beforeEach(() => {
    cssUrl = "https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.css";
});

describe("Creator", () => {
    it("should create a script tag when given an url", () => {
        const url = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js";

        expect(scriptCreator(url).nodeName).toBe("SCRIPT");
        expect(scriptCreator(url).src).toBe(url);
    });

    it("should create a style tag when given an url", () => {
        expect(styleCreator(cssUrl).nodeName).toBe("STYLE");
    });

    it("should create a link tag when given an url", () => {
        expect(linkCreator(cssUrl).nodeName).toBe("LINK");
        expect(linkCreator(cssUrl).href).toBe(cssUrl);
    });
});