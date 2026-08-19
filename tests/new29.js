"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Browser = void 0;
var Browser = /** @class */ (function () {
    function Browser(bname, bversion) {
        this.name = "chrome";
        console.log(bname);
        console.log(this.bversion = bversion);
    }
    Browser.prototype.lanunchBrowser = function () {
        console.log("lanuch browser");
    };
    return Browser;
}());
exports.Browser = Browser;
var obj = new Browser("firefox", 10);
//console.log(obj.lanunchBrowser());
obj.lanunchBrowser();
