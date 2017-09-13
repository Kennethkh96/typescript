class Inventory
{
    private inv: JSON[] = [];

    Add(): void
    {
        let name = <HTMLInputElement> document.getElementById("name");
        let serial = <HTMLInputElement> document.getElementById("serial");
        let value = <HTMLInputElement> document.getElementById("value");
    }


    Validate(name: HTMLInputElement, serial: HTMLInputElement, value: HTMLInputElement): boolean
    {
        if (name.value == null)
            return false;
        if (serial.value == null)
            return false;
        if (value.value == null && isNaN(+value.value))
            return false;

        alert("yay");
        return true;
    }
}

let inv = new Inventory();