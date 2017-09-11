"use strict";
var Aircraft = /** @class */ (function () {
    function Aircraft(velocity, passengers, airline) {
        this.velocity = velocity;
        this.passengers = passengers;
        this.airline = airline;
    }
    Aircraft.prototype.getVelocity = function () {
        return this.velocity;
    };
    Aircraft.prototype.getPassenges = function () {
        return this.passengers;
    };
    Aircraft.prototype.getAirline = function () {
        return this.airline;
    };
    Aircraft.prototype.toString = function () {
        return this.airline + ", " + this.passengers + ", speed " + this.velocity.toString();
    };
    return Aircraft;
}());
var Airport = /** @class */ (function () {
    function Airport() {
        this.aircrafts = [];
    }
    Airport.prototype.addAircraft = function (a) {
        this.aircrafts.push(a);
    };
    Airport.prototype.getPriority = function () {
        var res = this.aircrafts[0];
        for (var i = 0; i < this.aircrafts.length; i++) {
            if (this.aircrafts[i].getPassenges() > res.getPassenges())
                res = this.aircrafts[i];
        }
        return res;
    };
    Airport.prototype.getAirCraft = function (s) {
        var res = [];
        for (var i = 0; i < this.aircrafts.length; i++) {
            if (this.aircrafts[i].getAirline() == s)
                res.push(this.aircrafts[i]);
        }
        return res;
    };
    Airport.prototype.printLandingQueue = function () {
        this.aircrafts.sort(this.sort);
        for (var i = 0; i < this.aircrafts.length; i++) {
            console.log(this.aircrafts[i].toString());
        }
    };
    Airport.prototype.sort = function (a, b) {
        var pass = (b.getPassenges() !== a.getPassenges()) ? (b.getPassenges() > a.getPassenges()) ? 1 : -1 : 0;
        var speed = (a.getVelocity().length() !== b.getVelocity().length()) ? (a.getVelocity().length() > b.getVelocity().length()) ? 1 : -1 : 0;
        return pass || speed;
    };
    return Airport;
}());
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
        return this.x + "." + this.y;
    };
    return Vector;
}());
var Drive = /** @class */ (function () {
    function Drive() {
    }
    Drive.exam = function () {
        var a1 = new Aircraft(new Vector(5, 1), 5, "Telsa");
        var a2 = new Aircraft(new Vector(6, 2), 10, "Bukati");
        var a3 = new Aircraft(new Vector(7, 3), 15, "Turbo");
        var a4 = new Aircraft(new Vector(1, 4), 35, "Kennedy");
        var a5 = new Aircraft(new Vector(0, 5), 35, "Kennedy");
        console.log(a1.toString());
        console.log(a2.toString());
        console.log(a3.toString());
        console.log(a4.toString());
        console.log(a5.toString());
        var ap = new Airport();
        ap.addAircraft(a1);
        ap.addAircraft(a2);
        ap.addAircraft(a3);
        ap.addAircraft(a4);
        ap.addAircraft(a5);
        console.log(ap.getAirCraft("Kennedy"));
        ap.printLandingQueue();
    };
    return Drive;
}());
Drive.exam();
