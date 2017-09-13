class Inventory
{
    private inv: InventoryItem[] = [];

    Add(): void
    {
        let name = <HTMLInputElement> document.getElementById("name");
        let serial = <HTMLInputElement> document.getElementById("serial");
        let value = <HTMLInputElement> document.getElementById("value");

        if (! this.Validate(name, serial, value))
            return;

        let invitem = new InventoryItem(name.value, serial.value, +value.value);

        this.inv.push(invitem);
        this.PrintInventory();

        name.value = "";
        serial.value = "";
        value.value = "";
    }

    PrintBySearch()
    {
        let elem = <HTMLInputElement> document.getElementById("searchText");
        let search = elem.value;
        document.getElementById("printingTable").innerHTML = "";
        let table = <HTMLTableElement> document.getElementById("printingTable");
        table.appendChild(this.CreateTableHeader());
        for (let index = 0; index < this.inv.length; index++) {
            let el = this.inv[index];
            
            if (el.getName() == search || el.getSerial() == search || el.getValue() == +search)
            {
                table.appendChild(this.CreateTableRow(el));
            }
        }
    }

    PrintInventory()
    {
        document.getElementById("printingTable").innerHTML = "";
        let table = <HTMLTableElement> document.getElementById("printingTable");
        table.appendChild(this.CreateTableHeader());
        for (let index = 0; index < this.inv.length; index++) {
            let element = this.inv[index];
            table.appendChild(this.CreateTableRow(element));
        }
    }

    CreateTableHeader()
    {
        let row = document.createElement("tr");
        row.appendChild(this.CreateHtmlElem("th", "Name"));
        row.appendChild(this.CreateHtmlElem("th", "Serial"));
        row.appendChild(this.CreateHtmlElem("th", "Value"));

        return row;
    }

    CreateTableRow(item: InventoryItem): HTMLTableRowElement
    {
        let row = document.createElement("tr");
        row.appendChild(this.CreateHtmlElem("td", item.getName()));
        row.appendChild(this.CreateHtmlElem("td", item.getSerial()));
        row.appendChild(this.CreateHtmlElem("td", "$" + item.getValue()));

        return row;
    }

    CreateHtmlElem(type: string, text: string): HTMLElement
    {
        let elem = document.createElement(type);
        let textnode = document.createTextNode(text);
        elem.appendChild(textnode);

        return elem;
    }


    Validate(name: HTMLInputElement, serial: HTMLInputElement, value: HTMLInputElement): boolean
    {

        /*console.log("validate");
        console.log("name: " + name.value);
        console.log("serial " + serial.value);
        console.log("value: " + value.value);
        */
        if (name.value == "")
            return false;
        if (serial.value == "")
            return false;
        if (value.value == "" || isNaN(+value.value))
            return false;
        
        return true;
    }
}

class InventoryItem
{
    private name: string;
    private serial: string;
    private value: number;

    constructor(name: string, serial: string, value: number)
    {
        this.name = name;
        this.serial = serial;
        this.value = value;
    }

    public getName()
    {
        return this.name;
    }

    public getSerial()
    {
        return this.serial;
    }

    public getValue()
    {
        return this.value;
    }
}

let inven = new Inventory();

