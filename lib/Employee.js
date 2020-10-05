// Employee Class

class Employee {
    constructor() {
        this.name = "";
        this.id = "";
        this.email = "";
        this.role = "";
    };

    getName(name) {
        this.name = `${name}`;
        return
    };

    getId(id) {
        this.id = `${id}`;
        return
    };

    getEmail(email) {
        this.email = `${email}`;
        return
    };

    getRole(role) {
        this.role = `${role}`;
    };
};

const derek = new Employee();