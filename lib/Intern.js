//Imports the employee parent class
const Employee = require("./Employee");

//Intern class extends the epmloyee parent class
class Intern extends Employee {
    //Constructor function for name, email, id, and school for the intern class
    constructor({name, email, id, school}) {
        super({name, email, id});
        this.school = school;
        this.role = "Intern";
    }
    //getSchool method retrieves the school input for the intern class
    getSchool() {
        return this.school;
    }
    //getRole method returns the role of the intern class
    getRole () {
        return this.role;
    }
}

//Exports intern class and generates html file
module.exports = Intern;