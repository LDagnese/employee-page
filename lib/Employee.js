class Employee {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    getName() {
        return this.name;
    }
}

module.exports = Employee;
