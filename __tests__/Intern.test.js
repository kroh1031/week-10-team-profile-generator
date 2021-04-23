const Intern = require("../lib/Intern");

describe("Intern", () => {
  it("should return the name of the intern", () => {
    const newName = "Karen";
    const newbie = new Intern(newName, 2, "karen@email");
    expect(newbie.name).toEqual(newName);
  });
});
