//Imports the employee parent class
const Employee = require("./Employee");

//Engineer class extends employee class
class Engineer extends Employee{
    //Constructor function for name, email, id, and github for the employee class
    constructor({name, email, id, github}){
        super({name, email, id});
        this.github = github;
        this.role = "Engineer";
    }
    //getGithub method retrieves the github username input for the engineer class
    getGithub() {
        return this.github;
    }
    //getRole method returns the role
    getRole() {
        return this.role;
    }
}

//Exports engineer class and generates html file
module.exports = Engineer;