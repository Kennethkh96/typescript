class Aircraft {
    private velocity: Vector;
    private passengers: number;
    private airline: string;

    constructor(velocity: Vector, passengers: number, airline: string)
    {
        this.velocity = velocity;
        this.passengers = passengers;
        this.airline = airline;
    }

    getVelocity(): Vector
    {
        return this.velocity;
    }

    getPassenges(): number
    {
        return this.passengers;
    }

    getAirline(): string
    {
        return this.airline;
    }

    toString(): string 
    {
        return this.airline + ", " + this.passengers + ", speed " + this.velocity.toString();
    }
}

class Airport
{
    private aircrafts: Aircraft[] = [];

    addAircraft(a: Aircraft):void 
    {
        this.aircrafts.push(a);
    }

    getPriority(): Aircraft
    {
        let res: Aircraft = this.aircrafts[0];
        for (let i = 0; i < this.aircrafts.length; i++)
        {
            if (this.aircrafts[i].getPassenges() > res.getPassenges())
                res = this.aircrafts[i];
        }

        return res;
    }

    getAirCraft(s: string): Aircraft[]
    {
        let res: Aircraft[] = [];
        for (let i = 0; i < this.aircrafts.length; i++)
        {
            if (this.aircrafts[i].getAirline() == s)
                res.push(this.aircrafts[i]);
        }

        return res;
    }

    printLandingQueue(): void
    {
        this.aircrafts.sort(this.sort);

        for (let i = 0; i < this.aircrafts.length; i++)
        {
            console.log(this.aircrafts[i].toString());
        }
    }

    sort(a: Aircraft, b: Aircraft)
    {
        let pass = (b.getPassenges() !== a.getPassenges()) ? (b.getPassenges() > a.getPassenges()) ? 1 : -1 : 0;
        let speed = (a.getVelocity().length() !== b.getVelocity().length()) ? (a.getVelocity().length() > b.getVelocity().length()) ? 1 : -1 : 0;

        return pass || speed;
    }


}

class Vector {
    private x: number;
    private y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    plus(v: Vector) {
        return new Vector(this.x + v.x, this.y + v.y);
    }
    scale(t: number) {
        return new Vector(this.x * t, this.y * t);
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    verticalFlip() {
        return new Vector(-this.x, this.y);
    }
    horizontalFlip() {
        return new Vector(this.x, -this.y);
    }
    toString() {
        return this.x + "." + this.y;
    }
}


class Drive
{
    static exam(): void
    {
        let a1 = new Aircraft(new Vector(5, 1), 5, "Telsa");
        let a2 = new Aircraft(new Vector(6, 2), 10, "Bukati");
        let a3 = new Aircraft(new Vector(7, 3), 15, "Turbo");
        let a4 = new Aircraft(new Vector(1, 4), 35, "Kennedy");
        let a5 = new Aircraft(new Vector(0, 5), 35, "Kennedy");

        console.log(a1.toString());
        console.log(a2.toString());
        console.log(a3.toString());
        console.log(a4.toString());
        console.log(a5.toString());

        let ap = new Airport();
        ap.addAircraft(a1);
        ap.addAircraft(a2);
        ap.addAircraft(a3);
        ap.addAircraft(a4);
        ap.addAircraft(a5);

        console.log(ap.getAirCraft("Kennedy"));
        ap.printLandingQueue();


    }
}

Drive.exam();
