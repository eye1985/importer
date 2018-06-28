import { isJs, isCss } from '../src/utility';

describe("Utility", () => {
    it("should check if file extention is js based on url", () => {
        const url = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js";
        expect(isJs(url)).toBeTruthy();
    });

    it("should check if file extention is css based on url", () => {
        const url = "https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.css";
        expect(isCss(url)).toBeTruthy();
    });
});