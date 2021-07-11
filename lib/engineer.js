const Employee = require("../lib/Employee");

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);

        this.github = github;
        this.position = "Engineer"
    };
    getGithub() {
        return this.github
    };
    getPosition() {
        return this.position
    };
};

module.exports = Engineer;