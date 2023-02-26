const Intern = require("../lib/Intern");

describe("Intern", () => {
    const mockIntern = {
        name: "Freya",
        id: 102,
        email: "freya@gmail.com",
        school: "UC Davis",
    };
    describe("constructor tests", () => {
        test("Constructs a new instance of the intern class", () => {
            const intern = new Engineer(mockIntern);
            expect(intern).toBeInstanceOf(Intern);
        });
        test("Constrcuts a new instance of an engineer class with name, id, email, and school", () => {
            const intern = new Intern(mockIntern);
            expect(intern).toEqual({
                name: "Blake",
                id: 102,
                email: "blake@gmail.com",
                school: "UC Davis",
                role: "Intern",
            });
        });
    });
    describe("method tests", () => {
        test("Returns id when calling the getId method", () => {
            const intern = new Intern(mockIntern);
            expect(intern.getId()).toEqual(102);
        });
    
        test("Retrusn name when calling the getName method", () => {
            const intern = new Intern(mockIntern);
            expect(intern.getName()).toEqual("Blake");
        });

        test("Return name when calling the getEmail method", () => {
            const intern = new Intern(mockIntern);
            expect(intern.getEmail()).toEqual("blake@gmail.com");
        });

        test("Return school when calling the getSchool method", () => {
            const intern = new Intern(mockIntern);
            expect(intern.getSchool()).toEqual("UC Davis");
        });

        test("Return engineer role when calling the getRole method", () => {
            const intern = new Intern(mockIntern);
            expect(intern.getRole()).toEqual("Intern");
        });
    });
});