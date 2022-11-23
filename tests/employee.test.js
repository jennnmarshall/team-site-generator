const Employee = require('../lib/employee')

describe("Employee", () => {
    it("should fetch employee name with getName method", () => {
        const newb = new Employee("Jenn", 99, "jenn@sillygoose.com");
        expect(newb.getName()).toEqual("Jenn")
    })
})