class Card {
    private suit: string;
    private rank: number;

    constructor(suit: string, rank: number)
    {
        this.suit = suit;
        this.rank = rank;
    }

    compare(c: Card): Card
    {
        let cardsValues = ["Spar", "Hjerter", "Klør", "Ruder"];

        if (this.rank > c.rank)
            return this;
        else if (c.rank > this.rank)
            return c;
        else if (cardsValues.indexOf(this.suit) < cardsValues.indexOf(c.suit))
            return this;
        
        return c;
    }

    toString()
    {
        return this.suit + " " + this.rank;
    }
}

class Deck {
    private cards: Card[];

    constructor()
    {
        this.cards = [];
    }

    addCard(c: Card): void {
        this.cards.push(c);
    }

    removeCard(c: Card): void {
        let pos = this.cards.indexOf(c);
        this.cards.splice(pos, 1);
    }

    listDeck(): void {
        for (let i = 0; i < this.cards.length; i++)
        {
            console.log(this.cards[i].toString());
        }
    }

    spadesValue(): number {
        return 5;
    }
}

class Driver {
    static exam(): void
    {
        let c1 = new Card("Spade", 3);
        let c2 = new Card("Hjerter", 2);
        console.log(c1.toString());
        console.log(c2.toString());
        let deck = new Deck();
        deck.addCard(c1);
        deck.addCard(c2);
        deck.listDeck();
        console.log(c1.compare(c2));
    
    }
}

Driver.exam();