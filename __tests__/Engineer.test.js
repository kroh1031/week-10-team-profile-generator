const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  it("should return the name of the engineer", () => {
    const newName = "Karen";
    const newbie = new Engineer(newName, 2, "karen@email");
    expect(newbie.getName()).toEqual(newName);
  });
});

describe("Engineer", () => {
  it("should return the role of the engineer", () => {
    const newbie = new Engineer("Karen", 2, "karen@email");
    expect(newbie.getRole()).toEqual("Engineer");
  });
});

describe("Engineer", () => {
  it("should return the id of the engineer", () => {
    const newId = 2;
    const newbie = new Engineer("Karen", newId, "karen@email");
    expect(newbie.getId()).toEqual(newId);
  });
});

describe("Engineer", () => {
  it("should return the email of the engineer", () => {
    const newEmail = "karen@email";
    const newbie = new Engineer("Karen", 2, newEmail);
    expect(newbie.getEmail()).toEqual(newEmail);
  });
});

describe("Engineer", () => {
  it("should return the github username of the engineer", () => {
    const newGithub = "kroh1031";
    const newbie = new Engineer("Karen", 2, "karen@email", newGithub);
    expect(newbie.getGithub()).toEqual(newGithub);
  });
});
