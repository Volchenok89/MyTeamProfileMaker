  
const Employee = require("../lib/Employee");

class Manager extends Employee {
    constructor(name, id, email, office){
        super(name, id, email);
        
        this.officeNumber = office;
        this.position = "Manager"
    
    };
    getPosition() {
        return this.position
    };
};

module.exports = Manager;