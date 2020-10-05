// Manager Class 

const Employee = require("./Employee");

class Manager extends Employee {
    constructor() {
        super(name, id, email);
        this.officeNumber = '';
    };

    getOfficeNumber(number) {
        this.officeNumber = `${number}`
    }

    getRole(role) {
        this.role = `${role}`;
    };

};