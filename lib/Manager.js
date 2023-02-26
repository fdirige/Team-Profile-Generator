//Imports the employee parent class
const Employee = require("./Employee");

class Manager extends Employee {
    //Constructor function for name, email, id, and office number for the manager class
    constructor({name, email, id, officeNumber}) {
        super({name, email, id});
        this.officeNumber = officeNumber;
        this.role = "Manager";
    }
    //getOfficeNumber method retrieves the office number input for the manager class
    getOfficeNumber() {
        return this.officeNumber;
    }
    //getRole method returns the role of the manager class
    getRole() {
        return this.role;
    }
}

//Exports manager class and generates html file
module.exports = Manager;