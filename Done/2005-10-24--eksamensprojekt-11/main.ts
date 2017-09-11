class Eventz 
{
    private date: string;
    private kind: string;
    private price: Number;
    private noOfArtists: Number;

    constructor(date: string, kind: string, price: Number, noOfArtists: number)
    {
        this.date = date;
        this.kind = kind;
        this.price = price;
        this.noOfArtists = noOfArtists;
    }

    toString(): string
    {
        return this.date + ", " + this.kind + ", " + this.price + " kr., " + this.noOfArtists + " pers.";
    }

    getDate(): string
    {
        return this.date;
    }

    getKind(): string
    {
        return this.kind;
    }

    getPrice(): Number
    {
        return this.price;
    }
}

class Festival
{
    private events: Eventz[] = [];

    add(e: Eventz): void
    {
        this.events.push(e);
    }

    remove(e: Eventz): void
    {
        this.events.slice(this.events.indexOf(e), 1);
    }

    noOfEvents(date: String): number
    {
        let events: number = 0;
        for (let i = 0; i < this.events.length; i++)
        {
            if (this.events[i].getDate() == date)
                events++;
        }

        return events;
    }



    printEvents(): void
    {
        this.events.sort(this.sort);
        for (let i = 0; i < this.events.length; i++)
        {
            console.log(this.events[i].toString());
        }
    }

    sort(a: Eventz, b: Eventz)
    {
        let date = a.getDate().localeCompare(b.getDate());
        let kind = a.getKind().localeCompare(b.getKind());
        let price = (a.getPrice() !== b.getPrice()) ? (a.getPrice() > b.getPrice()) ? 1 : -1 : 0

        return date || kind || price;
    }
}

class Driver
{
    static exam(): void
    {
        let e1 = new Eventz("2005-10-25", "koncert", 18000, 4);
        let e2 = new Eventz("2005-10-25", "koncert", 17999, 4);
        let e3 = new Eventz("2017-08-11", "koncert", 20000, 5);
        console.log(e1.toString());
        console.log(e2.toString());

        let fest = new Festival();
        fest.add(e1);
        fest.add(e2); 
        fest.add(e3);
        console.log(fest.noOfEvents("2005-10-25"));
        fest.printEvents();

    }
}

Driver.exam();