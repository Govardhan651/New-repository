var ReusableMethods = /** @class */ (function () {
    function ReusableMethods() {
    }
    ReusableMethods.prototype.ElementClick = function (locator, timeout) {
        if (timeout) {
            console.log("add time");
        }
        else {
            console.log("clicking on the element ".concat(locator));
        }
    };
    return ReusableMethods;
}());
var rm = new ReusableMethods();
rm.ElementClick("#username");
rm.ElementClick("#username", 2000);
