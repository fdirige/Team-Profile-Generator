//Employee class
class Employee {

    //Constructor function to create an object for the employee class
    constructor({name, id, email}){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    //getName method retrieves the user input name for the employee class
    getName() {
        return this.name;
    }

    //getId method retrieves the user input id for the employee class
    getId() {
        return this.id;
    }

    //getEmail method retrieves the user input email for employee class
    getEmail() {
        return this.email;
    }
}

//Exports employee and generates html file
module.exports = Employee;