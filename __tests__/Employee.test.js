const Employee = require("../lib/Employee");
describe("Employee", () => {
  it("should return the name of the employee", () => {
    const newName = "Karen";
    const newbie = new Employee(newName, 2, "karen@email");
    expect(newbie.name).toEqual(newName);
  });
});
