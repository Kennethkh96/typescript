"use strict";
var Eventz = /** @class */ (function () {
    function Eventz(date, kind, price, noOfArtists) {
        this.date = date;
        this.kind = kind;
        this.price = price;
        this.noOfArtists = noOfArtists;
    }
    Eventz.prototype.toString = function () {
        return this.date + ", " + this.kind + ", " + this.price + " kr., " + this.noOfArtists + " pers.";
    };
    Eventz.prototype.getDate = function () {
        return this.date;
    };
    Eventz.prototype.getKind = function () {
        return this.kind;
    };
    Eventz.prototype.getPrice = function () {
        return this.price;
    };
    return Eventz;
}());
var Festival = /** @class */ (function () {
    function Festival() {
        this.events = [];
    }
    Festival.prototype.add = function (e) {
        this.events.push(e);
    };
    Festival.prototype.remove = function (e) {
        this.events.slice(this.events.indexOf(e), 1);
    };
    Festival.prototype.noOfEvents = function (date) {
        var events = 0;
        for (var i = 0; i < this.events.length; i++) {
            if (this.events[i].getDate() == date)
                events++;
        }
        return events;
    };
    Festival.prototype.printEvents = function () {
        this.events.sort(this.sort);
        for (var i = 0; i < this.events.length; i++) {
            console.log(this.events[i].toString());
        }
    };
    Festival.prototype.sort = function (a, b) {
        var date = a.getDate().localeCompare(b.getDate());
        var kind = a.getKind().localeCompare(b.getKind());
        var price = (a.getPrice() !== b.getPrice()) ? (a.getPrice() > b.getPrice()) ? 1 : -1 : 0;
        return date || kind || price;
    };
    return Festival;
}());
var Driver = /** @class */ (function () {
    function Driver() {
    }
    Driver.exam = function () {
        var e1 = new Eventz("2005-10-25", "koncert", 18000, 4);
        var e2 = new Eventz("2005-10-25", "koncert", 17999, 4);
        var e3 = new Eventz("2017-08-11", "koncert", 20000, 5);
        console.log(e1.toString());
        console.log(e2.toString());
        var fest = new Festival();
        fest.add(e1);
        fest.add(e2);
        fest.add(e3);
        console.log(fest.noOfEvents("2005-10-25"));
        fest.printEvents();
    };
    return Driver;
}());
Driver.exam();
