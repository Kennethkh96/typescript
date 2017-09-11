class Employee {
    private name: string;
    private salary: number;

    constructor(name: string, salary: number)
    {
        this.name = name;
        this.salary = salary;
    }

    toString(): string
    {
        return this.name + " kr." + this.salary;
    }

    getSalary(): number
    {
        return this.salary;
    }
}

class Department {
    private departmentName: string;
    private employees: Employee[];4
    private hOD: Employee;
    
    constructor(departmentName: string, hOD: Employee)
    {
        this.departmentName = departmentName;
        this.employees = [];
        this.hOD = hOD;
        
    }
    
    addEmployee(e: Employee)
    {
        this.employees.push(e);
    }
    
    deleteEmployee(e: Employee)
    {
        let pos = this.employees.indexOf(e);
        
        this.employees.splice(pos, 1);
    }

    departmentSalary(): Number
    {
        let res: number = 0;

        for (let i = 0; i < this.employees.length; i++)
        {
            res += this.employees[i].getSalary();
        }

        res += this.hOD.getSalary();

        return res;
    }

    bestPaidEmployee(): Employee
    {
        let res: Employee = this.employees[0];

        for (let i = 1; i < this.employees.length; i++)
        {
            if (this.employees[i].getSalary() > res.getSalary())
                res = this.employees[i];
        }

        return res;
    }
}

class Driver {
    static exam(): void {
        let e1 = new Employee("kennedy", 50000);
        let e2 = new Employee("dawg", 20000);   
        console.log(e1.toString());
        console.log(e2.toString());
        let dp = new Department("Dania", e1);
        dp.addEmployee(e2);
        console.log(dp.departmentSalary());
        console.log(dp.bestPaidEmployee());
    }
}

Driver.exam();