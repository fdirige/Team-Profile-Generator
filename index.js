const inquirer = require("inquirer");
const fs = require ("fs");
const generateHTML = require("./src/generateHTML");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const employees = [];
let isTeamComplete = false;

//Validates the user's input before proceeding to the next question
const validateInput = (userInput) => {
    if (userInput === "") {
        return "A value is required before proceeding";
    } else {
        return true;
    }
};

//Initilizes function
const init = async () => {
    await createManager();
    while (!isTeamComplete) {
        const employeeTypeQuestion = [
            {
                type: "list",
                message: "Please select the employee type:",
                name: "employeeType",
                choices: [
                    {name: "Engineer", value: "engineer", short: "Engineer"},
                    {name: "Intern", value: "intern", short: "Intern"},
                    {name: "None", value: "none", short: "None"},
                ],
            },
        ];
        //Generate employee type object
        const {employeeType} = await inquirer.createPromptModule(employeeTypeQuestion);

        if (employeeType === "none") {
            isTeamComplete = true;
        } else {
            if (employeeType === "engineer") {
                await createEngineer();
            }
            if (employeeType === "intern") {
                await createIntern();
        }
    }
}

// Employees array to genereate team.html
const HTML = generateHTML(employees);
fs.writeFileSync("team.html", HTML, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("HTML has been created");
    }
});
};

//Creates manager function
const createManager = async () => {
    const managerQuestions = [
        {
            type: "input",
            message: "Manager's Name:",
            name: "name",
            validate: validateInput,
        },
        {
            type: "input",
            message: "Manager's ID:",
            name: "id",
            validate: validateInput,
        },
        {
            type: "input",
            message: "Manager's Office Number:",
            name: "officeNumber",
            validate: validateInput,
        },
        {
            type: "input",
            message: "Manager's Email:",
            name: "email",
            validate: validateInput,
        },
    ];

    const managerAnswers = await inquirer.prompt(managerQuestions);
    const manager = new Manager(managerAnswers);
    employees.push(manager);
};

//Creates engineer function
const createEngineer = async () => {
    const engineerQuestions = [
        {
            type: "input",
            message: "Engineer's Name:",
            name: "name",
            validate: validateInput,
        },
        {
            type: "input",
            message: "Engineer's ID:",
            name: "id",
            validate: validateInput,
        },
        {
            type: "input",
            message: "Engineer's Email:",
            name: "email",
            validate: validateInput,
        },
        {
            type: "input",
            message: "Engineer's Github Profile:",
            name: "github",
            validate: validateInput,
        },
    ];

    const engineerAnswers = await inquirer.prompt(engineerQuestions);
    const engineer = new Engineer(engineerAnswers);
    employees.push(engineer);
};

//Creates intern function
const createIntern = async () => {
    const internQuestions = [
        {
            type: "input",
            message: "Intern's Name:",
            name: "name",
            validate: validateInput,
        },
        {
            type: "input",
            message: "Intern's ID:",
            name: "id",
            validate: validateInput,
        },
        {
            type: "input",
            message: "Intern's Email:",
            name: "email",
            validate: validateInput,
        },
        {
            type: "input",
            message: "Intern's school:",
            name: "school",
            validate: validateInput,
        },
    ];

    const internAnswers = await inquirer.prompt(internQuestions);
    const intern = new Intern(internAnswers);
    employees.push(intern);
};

init();
