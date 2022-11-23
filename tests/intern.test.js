const Intern = require('../lib/intern')

describe("Intern", () => {
    it("should fetch intern school with getSchool method", () => {
        const newb = new Intern("Josh", 55, "josh@sillygoose.com", "UCSB");
        expect(newb.getSchool()).toEqual("UCSB");
    })

    it("should return the role of intern with the getRole method", () => {
        const newb2 = new Intern("Shaylah", 88, "shaylah@sillygoose.com");
        expect(newb2.getRole()).toEqual("Intern");
    });
})   