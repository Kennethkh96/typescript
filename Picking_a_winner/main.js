"use strict";
var Winner = /** @class */ (function () {
    function Winner() {
        this.names = [];
    }
    Winner.prototype.Submit = function () {
        var name = document.getElementById("Input");
        if (name.value == "") {
            this.DrawWinner();
            return;
        }
        this.Add(name.value);
        name.value = "";
    };
    Winner.prototype.Reset = function () {
        this.names = [];
        var list = document.getElementById("names");
        list.innerHTML = "";
    };
    Winner.prototype.DrawWinner = function () {
        var winner = "";
        var numb = Math.round(Math.random() * this.names.length);
        winner = this.names[numb];
        alert("winner: " + winner);
        this.Reset();
    };
    Winner.prototype.Add = function (val) {
        this.names.push(val);
        var winnerNames = document.getElementById("names");
        winnerNames.appendChild(this.CreateHtmlElem("li", val));
    };
    Winner.prototype.CreateHtmlElem = function (type, text) {
        var elem = document.createElement(type);
        var textnode = document.createTextNode(text);
        elem.appendChild(textnode);
        return elem;
    };
    return Winner;
}());
var tracker = new Winner();
