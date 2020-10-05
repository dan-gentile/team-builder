// Engineer Class

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor() {
        super(name, id, email);
        this.gitHubUserName = "";
    };
    getGitHub(gitHub) {
        this.gitHubUserName = `${gitHub}`;
        return
    }

    getRole(role) {
        this.role = `${role}`;
    };

};