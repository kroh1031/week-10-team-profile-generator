const Manager = require("../lib/Manager");

describe("Manager", () => {
  it("should return the name of the manager", () => {
    const newName = "Karen";
    const newbie = new Manager(newName, 2, "karen@email");
    expect(newbie.name).toEqual(newName);
  });
});
