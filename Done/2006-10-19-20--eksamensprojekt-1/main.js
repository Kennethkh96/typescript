"use strict";
var Beer = /** @class */ (function () {
    function Beer(name, volume, price) {
        this.name = name;
        this.volume = volume;
        this.price = price;
    }
    Beer.prototype.getName = function () {
        return this.name;
    };
    Beer.prototype.getVolume = function () {
        return this.volume;
    };
    Beer.prototype.getPrice = function () {
        return this.price;
    };
    Beer.prototype.toString = function () {
        return this.name + ", " + this.volume + ", " + this.price;
    };
    Beer.prototype.Value = function () {
        return this.volume / this.price;
    };
    return Beer;
}());
var Pub = /** @class */ (function () {
    function Pub(name) {
        this.beers = [];
        this.name = name;
    }
    Pub.prototype.add = function (b) {
        this.beers.push(b);
    };
    Pub.prototype.remove = function (b) {
        this.beers.slice(this.beers.indexOf(b), 1);
    };
    Pub.prototype.beerWithVolume = function (v1, v2) {
        var res = 0;
        for (var i = 0; i < this.beers.length; i++) {
            if (this.beers[i].getVolume() >= v1 && this.beers[i].getVolume() <= v2)
                res += 1;
        }
        return res;
    };
    Pub.prototype.bestBuy = function () {
        var res = this.beers[0];
        for (var i = 1; i < this.beers.length; i++) {
            if (res.Value() < this.beers[i].Value())
                res = this.beers[i];
        }
        return res;
    };
    Pub.prototype.printBeers = function () {
        this.beers.sort(function (a, b) { return b.Value() - a.Value(); });
        for (var i = 0; i < this.beers.length; i++) {
            console.log(this.beers[i].toString());
        }
    };
    return Pub;
}());
var Driver = /** @class */ (function () {
    function Driver() {
    }
    Driver.exam = function () {
        var b1 = new Beer("Tuborg", 26, 30);
        var b3 = new Beer("Elfeant", 20, 100);
        var b2 = new Beer("Heineken", 36, 50);
        console.log(b1.toString());
        console.log(b2.toString());
        console.log(b3.toString());
        var pb = new Pub("pubben");
        pb.add(b1);
        pb.add(b2);
        pb.add(b3);
        console.log(pb.beerWithVolume(25, 35));
        console.log(pb.beerWithVolume(36, 50));
        console.log(pb.beerWithVolume(51, 100));
        console.log(pb.bestBuy());
        pb.printBeers();
    };
    return Driver;
}());
Driver.exam();
