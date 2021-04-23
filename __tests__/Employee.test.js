const Employee = require("../lib/Employee");
describe("Employee", () => {
  it("should return the name of the employee", () => {
    const newName = "Karen";
    const newbie = new Employee(newName, 2, "karen@email");
    expect(newbie.getName()).toEqual(newName);
  });
});

describe("Employee", () => {
  it("should return the role of the employee", () => {
    const newbie = new Employee("Karen", 2, "karen@email");
    expect(newbie.getRole()).toEqual("Employee");
  });
});

describe("Employee", () => {
  it("should return the id of the employee", () => {
    const newId = 2;
    const newbie = new Employee("Karen", newId, "karen@email");
    expect(newbie.getId()).toEqual(newId);
  });
});

describe("Employee", () => {
  it("should return the email of the employee", () => {
    const newEmail = "karen@email";
    const newbie = new Employee("Karen", 2, newEmail);
    expect(newbie.getEmail()).toEqual(newEmail);
  });
});
