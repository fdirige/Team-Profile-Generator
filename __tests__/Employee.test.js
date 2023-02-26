const Employee = require("../lib/Employee");

describe("Employee",() => {
    const mockEmployee = {
        name: "Sebastian",
        id: 100,
        email: "sebastian@gmail.com",
    };
describe("Constructor tests",()=>{
    test("Constructs a new instance of an employee class",() => {
        const employee = new Employee(mockEmployee);
        expect(employee).toBeInstanceOf(Employee);
    });
test("Constructs a new instance of an employee class with name, id, email",() => {
    const employee = new Employee(mockEmployee);
    expect(employee).toEqual({
        name: "Sebastian",
        id: 100,
        email: "sebastian@gmail.com",
    });
});
});
describe("method tests", () => {
    test("Returns an id when calling the getID method",() => {
        const employee = new Employee(mockEmployee);
        expect(employee.getID()).toEqual(100);
    });

    test("Returns name when calling the getName method", () => {
        const employee = new Employee(mockEmployee);
        expect(employee.getName()).toEqual("Sebastian");
    });

    test("Returns email when calling the getEmail method", () => {
        const employee = new Employee(mockEmployee);
        expect(employee.getEmail()).toEqual("sebastian@gmail.com");
    });
});
});