"use strict";
exports.__esModule = true;
exports.Constant = void 0;
var Constant = /** @class */ (function () {
    function Constant() {
    }
    Constant.FullNameRegex = /^([a-zA-Z ]{2,40})$/;
    Constant.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    Constant.mobileRegex = /^([0-9]{10})$/;
    Constant.cityRegex = /^([a-zA-Z]{2,40})$/;
    Constant.ageRegex = /^([0-9]{1,2})$/;
    Constant.salaryRegex = /^([0-9]{3,10})$/;
    return Constant;
}());
exports.Constant = Constant;
