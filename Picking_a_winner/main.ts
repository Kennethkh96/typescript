class Winner
{
    private names: string[] = [];

    Submit()
    {
        let name = <HTMLInputElement> document.getElementById("Input");
        if (name.value == "")
        {
            this.DrawWinner();
            return;
        }
        this.Add(name.value);
        name.value = "";
    }

    Reset()
    {
        this.names = [];
        let list = <HTMLUListElement> document.getElementById("names");
        list.innerHTML = "";
    }

    DrawWinner()
    {
        let winner = "";
        let numb = Math.round(Math.random() * this.names.length);
        winner = this.names[numb];
        alert("winner: " + winner);
        this.Reset();
    }

    Add(val: string)
    {
        this.names.push(val);
        
        let winnerNames = <HTMLUListElement> document.getElementById("names");
        winnerNames.appendChild(this.CreateHtmlElem("li", val));
    }

    CreateHtmlElem(type: string, text: string): HTMLElement
    {
        let elem = document.createElement(type);
        let textnode = document.createTextNode(text);
        elem.appendChild(textnode);

        return elem;
    }
}

let tracker = new Winner();