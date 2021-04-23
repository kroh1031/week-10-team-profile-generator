const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  it("should return the name of the engineer", () => {
    const newName = "Karen";
    const newbie = new Engineer(newName, 2, "karen@email");
    expect(newbie.name).toEqual(newName);
  });
});
