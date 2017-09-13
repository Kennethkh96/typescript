"use strict";
var Inventory = /** @class */ (function () {
    function Inventory() {
        this.inv = [];
    }
    Inventory.prototype.Add = function () {
        var name = document.getElementById("name");
        var serial = document.getElementById("serial");
        var value = document.getElementById("value");
    };
    Inventory.prototype.Validate = function (name, serial, value) {
        if (name.value == null)
            return false;
        if (serial.value == null)
            return false;
        if (value.value == null && isNaN(+value.value))
            return false;
        alert("yay");
        return true;
    };
    return Inventory;
}());
var inv = new Inventory();
