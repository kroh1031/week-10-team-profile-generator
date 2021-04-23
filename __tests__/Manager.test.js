const Manager = require("../lib/Manager");

describe("Manager", () => {
  it("should return the name of the manager", () => {
    const newName = "Karen";
    const newbie = new Manager(newName, 2, "karen@email");
    expect(newbie.getName()).toEqual(newName);
  });
});

describe("Manager", () => {
  it("should return the role of the manager", () => {
    const newbie = new Manager("Karen", 2, "karen@email");
    expect(newbie.getRole()).toEqual("Manager");
  });
});

describe("Manager", () => {
  it("should return the id of the manager", () => {
    const newId = 2;
    const newbie = new Manager("Karen", newId, "karen@email");
    expect(newbie.getId()).toEqual(newId);
  });
});

describe("Manager", () => {
  it("should return the email of the manager", () => {
    const newEmail = "karen@email";
    const newbie = new Manager("Karen", 2, newEmail);
    expect(newbie.getEmail()).toEqual(newEmail);
  });
});

describe("Manager", () => {
  it("should return the office number of the manager", () => {
    const newOfficeNumber = 123;
    const newbie = new Manager("Karen", 2, "karen@email", newOfficeNumber);
    expect(newbie.officeNumber).toEqual(newOfficeNumber);
  });
});
