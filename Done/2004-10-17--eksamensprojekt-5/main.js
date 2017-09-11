"use strict";
var Card = /** @class */ (function () {
    function Card(suit, rank) {
        this.suit = suit;
        this.rank = rank;
    }
    Card.prototype.compare = function (c) {
        var cardsValues = ["Spar", "Hjerter", "Klør", "Ruder"];
        if (this.rank > c.rank)
            return this;
        else if (c.rank > this.rank)
            return c;
        else if (cardsValues.indexOf(this.suit) < cardsValues.indexOf(c.suit))
            return this;
        return c;
    };
    Card.prototype.toString = function () {
        return this.suit + " " + this.rank;
    };
    return Card;
}());
var Deck = /** @class */ (function () {
    function Deck() {
        this.cards = [];
    }
    Deck.prototype.addCard = function (c) {
        this.cards.push(c);
    };
    Deck.prototype.removeCard = function (c) {
        var pos = this.cards.indexOf(c);
        this.cards.splice(pos, 1);
    };
    Deck.prototype.listDeck = function () {
        for (var i = 0; i < this.cards.length; i++) {
            console.log(this.cards[i].toString());
        }
    };
    Deck.prototype.spadesValue = function () {
        return 5;
    };
    return Deck;
}());
var Driver = /** @class */ (function () {
    function Driver() {
    }
    Driver.exam = function () {
        var c1 = new Card("Spade", 3);
        var c2 = new Card("Hjerter", 2);
        console.log(c1.toString());
        console.log(c2.toString());
        var deck = new Deck();
        deck.addCard(c1);
        deck.addCard(c2);
        deck.listDeck();
        console.log(c1.compare(c2));
    };
    return Driver;
}());
Driver.exam();
