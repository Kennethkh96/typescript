"use strict";
var Vector = /** @class */ (function () {
    function Vector(x, y) {
        this.x = x;
        this.y = y;
    }
    Vector.prototype.plus = function (v) {
        return new Vector(this.x + v.x, this.y + v.y);
    };
    Vector.prototype.scale = function (t) {
        return new Vector(this.x * t, this.y * t);
    };
    Vector.prototype.length = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    Vector.prototype.verticalFlip = function () {
        return new Vector(-this.x, this.y);
    };
    Vector.prototype.horizontalFlip = function () {
        return new Vector(this.x, -this.y);
    };
    Vector.prototype.toString = function () {
        return "[" + this.x + ", " + this.y + "]";
    };
    return Vector;
}());
