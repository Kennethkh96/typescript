"use strict";
var Inventory = /** @class */ (function () {
    function Inventory() {
        this.inv = [];
    }
    Inventory.prototype.Add = function () {
        var name = document.getElementById("name");
        var serial = document.getElementById("serial");
        var value = document.getElementById("value");
        if (!this.Validate(name, serial, value))
            return;
        var invitem = new InventoryItem(name.value, serial.value, +value.value);
        this.inv.push(invitem);
        this.PrintInventory();
        name.value = "";
        serial.value = "";
        value.value = "";
    };
    Inventory.prototype.PrintBySearch = function () {
        var elem = document.getElementById("searchText");
        var search = elem.value;
        document.getElementById("printingTable").innerHTML = "";
        var table = document.getElementById("printingTable");
        table.appendChild(this.CreateTableHeader());
        for (var index = 0; index < this.inv.length; index++) {
            var el = this.inv[index];
            if (el.getName() == search || el.getSerial() == search || el.getValue() == +search) {
                table.appendChild(this.CreateTableRow(el));
            }
        }
    };
    Inventory.prototype.PrintInventory = function () {
        document.getElementById("printingTable").innerHTML = "";
        var table = document.getElementById("printingTable");
        table.appendChild(this.CreateTableHeader());
        for (var index = 0; index < this.inv.length; index++) {
            var element = this.inv[index];
            table.appendChild(this.CreateTableRow(element));
        }
    };
    Inventory.prototype.CreateTableHeader = function () {
        var row = document.createElement("tr");
        row.appendChild(this.CreateHtmlElem("th", "Name"));
        row.appendChild(this.CreateHtmlElem("th", "Serial"));
        row.appendChild(this.CreateHtmlElem("th", "Value"));
        return row;
    };
    Inventory.prototype.CreateTableRow = function (item) {
        var row = document.createElement("tr");
        row.appendChild(this.CreateHtmlElem("td", item.getName()));
        row.appendChild(this.CreateHtmlElem("td", item.getSerial()));
        row.appendChild(this.CreateHtmlElem("td", "$" + item.getValue()));
        return row;
    };
    Inventory.prototype.CreateHtmlElem = function (type, text) {
        var elem = document.createElement(type);
        var textnode = document.createTextNode(text);
        elem.appendChild(textnode);
        return elem;
    };
    Inventory.prototype.Validate = function (name, serial, value) {
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
    };
    return Inventory;
}());
var InventoryItem = /** @class */ (function () {
    function InventoryItem(name, serial, value) {
        this.name = name;
        this.serial = serial;
        this.value = value;
    }
    InventoryItem.prototype.getName = function () {
        return this.name;
    };
    InventoryItem.prototype.getSerial = function () {
        return this.serial;
    };
    InventoryItem.prototype.getValue = function () {
        return this.value;
    };
    return InventoryItem;
}());
var inven = new Inventory();
