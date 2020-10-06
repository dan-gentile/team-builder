// Engineer Class

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, gitHubUserName) {
        super(name, id, email);
        this.gitHubUserName = gitHubUserName;
        this.role = "Engineer";

    };
    getGitHub() {
        return this.gitHubUserName;
    }

    getRole() {
        return this.role;
    };

};

module.exports = Engineer;