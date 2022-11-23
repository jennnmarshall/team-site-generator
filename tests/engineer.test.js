const Employee = require('../lib/employee');
const Engineer = require('../lib/engineer')

describe("Engineer", () => {
    it("should fetch engineer's github url with the getGithub method", () => {
        const newb = new Engineer("Harry", 33, "harry@sillygoose.com", "myGithub");
        expect(newb.getGithub()).toEqual("myGithub");
    })

    it("should read engineers role as engineer using the getRole function", () => {
        const newb2 = new Engineer("Alan", 17, "alan@sillygoose.com", "alanGithub");
        expect(newb2.getRole()).toEqual("Engineer");
    })
})