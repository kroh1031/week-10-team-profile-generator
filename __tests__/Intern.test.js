const Intern = require("../lib/Intern");

describe("Intern", () => {
  it("should return the name of the intern", () => {
    const newName = "Karen";
    const newbie = new Intern(newName, 2, "karen@email");
    expect(newbie.getName()).toEqual(newName);
  });
});

describe("Intern", () => {
  it("should return the role of the intern", () => {
    const newbie = new Intern("Karen", 2, "karen@email");
    expect(newbie.getRole()).toEqual("Intern");
  });
});

describe("Intern", () => {
  it("should return the id of the intern", () => {
    const newId = 2;
    const newbie = new Intern("Karen", newId, "karen@email");
    expect(newbie.getId()).toEqual(newId);
  });
});

describe("Intern", () => {
  it("should return the email of the intern", () => {
    const newEmail = "karen@email";
    const newbie = new Intern("Karen", 2, newEmail);
    expect(newbie.getEmail()).toEqual(newEmail);
  });
});

describe("Intern", () => {
  it("should return the school of the intern", () => {
    const newSchool = "Georgia Tech";
    const newbie = new Intern("Karen", 2, "karen@email", newSchool);
    expect(newbie.getSchool()).toEqual(newSchool);
  });
});
