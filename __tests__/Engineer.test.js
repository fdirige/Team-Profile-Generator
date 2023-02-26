const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    const mockEngineer = {
        name: "Freya",
        id: 101,
        email: "freya@gmail.com",
        github: "www.github.com/freya",
    };
    describe("constructor tests", () => {
        test("Constructs a new instance of the engineer class", () => {
            const engineer = new Engineer(mockEngineer);
            expect(engineer).toBeInstanceOf(Engineer);
        });
        test("Constructs a new instance of an engineer clas with name, id, email, and github profile", () => {
            const engineer = new Engineer(mockEngineer);
            expect(engineer).toEqual({
                name: "Freya",
                id: 101,
                email: "freya@gmail.com",
                github: "www.github.com/freya",
                role: "Engineer",
            });
        });
    });
    describe("method tests", () => {
        test("Returns id when calling the getId method", () => {
            const engineer = new Engineer(mockEngineer);
            expect(engineer.getId()).toEqual(101);
        });
    
        test("Returns name when calling the getName method", () => {
            const engineer = new Engineer(mockEngineer);
            expect(engineer.getName()).toEqual("Freya");
        });

        test("Returns name when calling the getEmail method", () => {
            const engineer = new Engineer(mockEngineer);
            expect(engineer.getEmail()).toEqual("freya@gmail.com");
        });

        test("Returns github profile when calling the getGithub method", () => {
            const engineer = new Engineer(mockEngineer);
            expect(engineer.getGithub()).toEqual("www.github.com/freya");
        });

        test("Returns engineer role when calling the getRole method", () => {
            const engineer = new Engineer(mockEngineer);
            expect(engineer.getRole()).toEqual("Engineer");
        });
    });
});