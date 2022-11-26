// required exports and external packages
const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const generateCards = require("./src/createHTML");

// begin inquirer prompts

// global arrays to contain inquirer responses
const myTeam = [];

// this function initializes the program by asking for team name, then jumping to the addManager function
function startProject() {
  inquirer
    .prompt([
      {
        type: "input",
        message:
          "Hello! To generate your team website, begin by entering your Project Name",
        name: "projectName",
      },
    ])
    .then((response) => {
      const nameObj = response.projectName;
      myTeam.push(nameObj);
      addManager();
    });
}

// function prompts manager info, adds to array, and prompts additional team members
function addManager() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your project manager's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is your project manager's email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What is your project manager's employee ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is your project manager's office number?",
        name: "officeNumber",
      },
    ])
    .then((response) => {
      const manager = new Manager(
        response.name,
        response.id,
        response.email,
        response.officeNumber
      );
      myTeam.push(manager);
      addTeamMember();
    });
}

// this function provides a list of choices to the user and switches between the associated functions based upon input
function addTeamMember() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Would you like to add additional team members?",
        choices: ["Add Engineer", "Add Intern", "That's the whole team!"],
        name: "teamAdd",
      },
    ])
    .then((response) => {
      switch (response.teamAdd) {
        case "Add Engineer":
          addEngineer();
          break;

        case "Add Intern":
          addIntern();
          break;

        case "That's the whole team!":
          finalTeam();
          break;
      }
    });
}

function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your Engineer's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is your Engineer's email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What is your Engineer's employee ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is your Engineer's Github username?",
        name: "github",
      },
    ])
    .then((response) => {
      const engineer = new Engineer(
        response.name,
        response.id,
        response.email,
        response.github
      );
      myTeam.push(engineer);
      addTeamMember();
    });
}

function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your Intern's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is your Intern's email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What is your Intern's employee ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What school does your Intern attend?",
        name: "school",
      },
    ])
    .then((response) => {
      const intern = new Intern(
        response.name,
        response.id,
        response.email,
        response.school
      );
      myTeam.push(intern);
      addTeamMember();
    });
}

// finalTeam provides feedback to the user and writes the html file based on the myTeam array compiled from user responses
function finalTeam() {
  console.log(
    "Your team's website has been generated! You can access it in the dist directory."
  );
  fs.writeFileSync(`./dist/${myTeam[0]}.html`, generateCards(myTeam));
}

startProject();
