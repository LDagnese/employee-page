class Employee {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }
}

module.exports = Employee;
