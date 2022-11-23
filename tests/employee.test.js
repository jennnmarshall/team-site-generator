const Employee = require('../lib/employee')

describe("Employee", () => {
    it("should fetch employee name with getName method", () => {
        const newb = new Employee("Jenn", 99, "jenn@sillygoose.com");
        expect(newb.getName()).toEqual("Jenn");
    })

    it("should fetch employee id with getId method", () => {
        const newb2 = new Employee("Andy", 38, "andy@sillygoose.com");
        expect(newb2.getId()).toEqual(38);
    })

    it("should fetch employee email with getEmail method", () => {
        const newb3 = new Employee("Jimmy", 77, "jimmy@sillygoose.com");
        expect(newb3.getEmail()).toEqual("jimmy@sillygoose.com");
    })

    it("should return the role of employee with the getRole method", () => {
        const newb4 = new Employee("Shaylah", 88, "shaylah@sillygoose.com");
        expect(newb4.getRole()).toEqual("Employee");
    })
})