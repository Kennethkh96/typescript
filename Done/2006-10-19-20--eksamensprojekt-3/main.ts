class Whiskey
{
    private name: string;
    private price: number;
    private grade: number;

    constructor(name: string, price: number, grade: number)
    {
        this.name = name;
        this.price = price;
        this.grade = grade;
    }

    getName(): string
    {
        return this.name;
    }

    getPrice(): number
    {
        return this.price;
    }
    
    getGrade(): number
    {
        return this.grade;
    }

    value(): number
    {
        return this.grade / this.price;
    }
    
    toString(): string
    {
        return this.name + ", " + this.price + ", " + this.grade; 
    }


}

class Bar
{
    private name: String;
    private whiskys: Whiskey[] = [];

    constructor(name: string)
    {
        this.name = name;
    }

    add(w: Whiskey)
    {
        this.whiskys.push(w);
    }

    remove(w: Whiskey)
    {
        this.whiskys.slice(this.whiskys.indexOf(w), 1);
    }

    whiskyWithGrade(g: number): Whiskey[]
    {
        let res: Whiskey[] = [];

        for (let i = 0; i < this.whiskys.length; i++)
        {
            if (this.whiskys[i].getGrade() >= g)
                res.push(this.whiskys[i]);
        }

        return res;
    }

    bestBuy(): Whiskey
    {
        let res: Whiskey = this.whiskys[0];

        for (let i = 1; i <this.whiskys.length; i++)
        {
            if (this.whiskys[i].value() > res.value())
                res = this.whiskys[i];

        }

        return res;
    }

    printWhiskey(): void
    {
        this.whiskys.sort((a, b) => b.value() - a.value());
        for (let i = 0; i < this.whiskys.length; i++)
        {
            console.log(this.whiskys[i].toString());
        }
    }
}

class Driver
{
    static exam(): void
    {
        let w1 = new Whiskey("whinkey", 25, 85);
        let w2 = new Whiskey("heineken", 100, 20);
        let w3 = new Whiskey("tuborg", 150, 25);
        console.log(w1.toString());
        console.log(w2.toString());
        console.log(w3.toString());

        let b = new Bar("test bar");
        b.add(w1);
        b.add(w2);
        b.add(w3);
        console.log(b.whiskyWithGrade(70));
        console.log(b.bestBuy());
        b.printWhiskey();

    }
}

Driver.exam();