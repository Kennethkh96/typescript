"use strict";
var Whiskey = /** @class */ (function () {
    function Whiskey(name, price, grade) {
        this.name = name;
        this.price = price;
        this.grade = grade;
    }
    Whiskey.prototype.getName = function () {
        return this.name;
    };
    Whiskey.prototype.getPrice = function () {
        return this.price;
    };
    Whiskey.prototype.getGrade = function () {
        return this.grade;
    };
    Whiskey.prototype.value = function () {
        return this.grade / this.price;
    };
    Whiskey.prototype.toString = function () {
        return this.name + ", " + this.price + ", " + this.grade;
    };
    return Whiskey;
}());
var Bar = /** @class */ (function () {
    function Bar(name) {
        this.whiskys = [];
        this.name = name;
    }
    Bar.prototype.add = function (w) {
        this.whiskys.push(w);
    };
    Bar.prototype.remove = function (w) {
        this.whiskys.slice(this.whiskys.indexOf(w), 1);
    };
    Bar.prototype.whiskyWithGrade = function (g) {
        var res = [];
        for (var i = 0; i < this.whiskys.length; i++) {
            if (this.whiskys[i].getGrade() >= g)
                res.push(this.whiskys[i]);
        }
        return res;
    };
    Bar.prototype.bestBuy = function () {
        var res = this.whiskys[0];
        for (var i = 1; i < this.whiskys.length; i++) {
            if (this.whiskys[i].value() > res.value())
                res = this.whiskys[i];
        }
        return res;
    };
    Bar.prototype.printWhiskey = function () {
        this.whiskys.sort(function (a, b) { return b.value() - a.value(); });
        for (var i = 0; i < this.whiskys.length; i++) {
            console.log(this.whiskys[i].toString());
        }
    };
    return Bar;
}());
var Driver = /** @class */ (function () {
    function Driver() {
    }
    Driver.exam = function () {
        var w1 = new Whiskey("whinkey", 25, 85);
        var w2 = new Whiskey("heineken", 100, 20);
        var w3 = new Whiskey("tuborg", 150, 25);
        console.log(w1.toString());
        console.log(w2.toString());
        console.log(w3.toString());
        var b = new Bar("test bar");
        b.add(w1);
        b.add(w2);
        b.add(w3);
        console.log(b.whiskyWithGrade(70));
        console.log(b.bestBuy());
        b.printWhiskey();
    };
    return Driver;
}());
Driver.exam();
