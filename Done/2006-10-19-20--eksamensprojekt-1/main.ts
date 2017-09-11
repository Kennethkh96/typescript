class Beer {
    private name: string;
    private volume: number;
    private price: number;

    constructor(name: string, volume: number, price: number)
    {
        this.name = name; 
        this.volume = volume;
        this.price = price;
    }

    getName(): string
    {
        return this.name;
    }

    getVolume(): number
    {
        return this.volume;
    }

    getPrice(): number
    {
        return this.price;
    }

    toString(): string
    {
        return this.name + ", " + this.volume + ", " + this.price;
    }

    Value(): number
    {
        return this.volume / this.price;
    }
}

class Pub {
    private name: string;
    private beers: Beer[] = [];

    constructor(name: string)
    {
        this.name = name;
    }

    add(b: Beer)
    {
        this.beers.push(b);
    }

    remove(b: Beer)
    {
        this.beers.slice(this.beers.indexOf(b), 1);
    }

    beerWithVolume(v1: number, v2: number): number
    {
        let res: number = 0;
        for (let i = 0; i < this.beers.length; i++)
        {
            if (this.beers[i].getVolume() >= v1 && this.beers[i].getVolume() <= v2)
                res += 1;
        }

        return res;
    }

    bestBuy(): Beer
    {
        let res = this.beers[0];
        for (let i = 1; i < this.beers.length; i++)
        {
            if (res.Value() < this.beers[i].Value())
                res = this.beers[i];
        }

        return res;
    }

    printBeers(): void
    {
        this.beers.sort((a, b) => b.Value() - a.Value());
        for(let i = 0; i < this.beers.length; i++)
        {
            console.log(this.beers[i].toString());
        }
    }


}

class Driver
{
    static exam(): void
    {
        let b1 = new Beer("Tuborg", 26, 30);
        let b3 = new Beer("Elfeant", 20, 100);
        let b2 = new Beer("Heineken", 36, 50);
        console.log(b1.toString());
        console.log(b2.toString());
        console.log(b3.toString());
        
        let pb = new Pub("pubben");
        pb.add(b1);
        pb.add(b2);
        pb.add(b3);

        console.log(pb.beerWithVolume(25, 35));
        console.log(pb.beerWithVolume(36, 50));
        console.log(pb.beerWithVolume(51, 100));

        console.log(pb.bestBuy());
        pb.printBeers();

    }
}

Driver.exam();