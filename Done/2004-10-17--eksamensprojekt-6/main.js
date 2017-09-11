"use strict";
var Employee = /** @class */ (function () {
    function Employee(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    Employee.prototype.toString = function () {
        return this.name + " kr." + this.salary;
    };
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    return Employee;
}());
var Department = /** @class */ (function () {
    function Department(departmentName, hOD) {
        this.departmentName = departmentName;
        this.employees = [];
        this.hOD = hOD;
    }
    Department.prototype.addEmployee = function (e) {
        this.employees.push(e);
    };
    Department.prototype.deleteEmployee = function (e) {
        var pos = this.employees.indexOf(e);
        this.employees.splice(pos, 1);
    };
    Department.prototype.departmentSalary = function () {
        var res = 0;
        for (var i = 0; i < this.employees.length; i++) {
            res += this.employees[i].getSalary();
        }
        res += this.hOD.getSalary();
        return res;
    };
    Department.prototype.bestPaidEmployee = function () {
        var res = this.employees[0];
        for (var i = 1; i < this.employees.length; i++) {
            if (this.employees[i].getSalary() > res.getSalary())
                res = this.employees[i];
        }
        return res;
    };
    return Department;
}());
var Driver = /** @class */ (function () {
    function Driver() {
    }
    Driver.exam = function () {
        var e1 = new Employee("kennedy", 50000);
        var e2 = new Employee("dawg", 20000);
        console.log(e1.toString());
        console.log(e2.toString());
        var dp = new Department("Dania", e1);
        dp.addEmployee(e2);
        console.log(dp.departmentSalary());
        console.log(dp.bestPaidEmployee());
    };
    return Driver;
}());
Driver.exam();
