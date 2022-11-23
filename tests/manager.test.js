const Manager = require('../lib/manager');

describe("Manager", () => {
  it("should fetch manager office number with getOfficeNumber method", () => {
    const newb = new Manager("Alistair", 52, "alistair@sillygoose.com", 1);
    expect(newb.getOfficeNumber()).toEqual(1);
  });

  it("should return the role of manager with the getRole method", () => {
    const newb2 = new Manager("Shaylah", 88, "shaylah@sillygoose.com");
    expect(newb2.getRole()).toEqual("Manager");
  });
});
