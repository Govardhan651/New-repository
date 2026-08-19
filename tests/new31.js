var Access = /** @class */ (function () {
    function Access() {
    }
    Access.prototype.loadurl = function () {
        console.log("load url");
    };
    Access.prototype.loadusername = function () {
        console.log("load username");
    };
    Access.prototype.loadpassword = function () {
        console.log("load password");
    };
    Access.prototype.getinfo = function () {
        this.loadusername();
        this.loadpassword();
    };
    return Access;
}());
var access = new Access();
access.loadurl();
access.getinfo();
