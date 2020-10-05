// Intern Class

const Employee = require("./Employee");

class Intern extends Employee {
    constructor() {
        super(name, id, email);
        this.school = "";
    };

    getSchool(school) {
        this.school = `${school}`;
        return

    };

    getRole(role) {
        this.role = `${role}`;
    };

};