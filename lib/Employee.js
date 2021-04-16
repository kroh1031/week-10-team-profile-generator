class Employee {
  constructor(name, id, email) {
    this.Name = name;
    this.Id = id;
    this.Email = email;
  }
  getName() {
    return this.Name;
  }
  getId() {
    return this.Id;
  }
  getEmail() {
    return this.Email;
  }
  getRole() {
    return "Employee";
  }
}

// let newbie = new Employee("Karen", 2fdghjkl, "karen@email");

//newbie.Name

module.exports = Employee;
