const Manager = require("../lib/Manager");

describe("Manager", () => {
    const mockManager = {
        name: "Erick",
        id: 103,
        email: "erick@gmail.com",
        officeNumber: 888,
    };
    describe("constructor tests", () => {
        test("Constructs a new instance of the manager class", () => {
            const manager = new Manager(mockManager);
            expect(manager).toBeInstanceOf(Manager);
        });
        test("Constructs a new instance of an engineer class with name, id, email, and office number", () => {
            const manager = new Manager(mockManager);
            expect(manager).toEqual({
                name: "Erick",
                id: 103,
                email: "erick@gmail.com",
                officeNumber: 888,
            });
        });
    });
    describe("method tests", () => {
        test("Returns id when calling the getId method", () => {
            const manager = new Manager(mockManager);
            expect(manager.getId()).toEqual(103);
        });
    
        test("Returns name when calling the getName method", () => {
            const manager = new Manager(mockManager);
            expect(manager.getName()).toEqual("Erick");
        });

        test("Returns name when calling the getEmail method", () => {
            const manager = new Manager(mockManager);
            expect(manager.getEmail()).toEqual("erick@gmail.com");
        });

        test("Returns school when calling the getOfficeNumber method", () => {
            const manager = new Manager(mockManager);
            expect(manager.getOfficeNumber()).toEqual(888);
        });

        test("Returns engineer role when calling the getRole method", () => {
            const manager = new Manager(mockManager);
            expect(manager.getRole()).toEqual("Manager");
        });
    });
});