const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// let options = [];

// array of questions for user
const questions = [
  {
    name: "createReadMe",
    question: "Would you like to generate a README.md file?",
  },
  { name: "title", question: "What is the title of your project?" },
  {
    name: "descriptionText",
    question: "What would you like your description to be?",
  },
  {
    name: "installationText",
    question: "Please input installation text section here",
  },
  { name: "usageText", question: "Please input usage section text here" },
  {
    name: "contributionText",
    question: "Please input contribution section text here",
  },
  { name: "testsText", question: "Please input tests section text here" },
  {
    name: "licenseChoice",
    question: "What license would you like for this project?",
  },
  {
    name: "githubUsername",
    question: "What is your github profile username?",
  },
  {
    name: "emailAddress",
    question: "What email address would you like to add for feedback?",
  },
  {
    name: "fileLocation",
    question:
      "Input a path to where you would like to save your generated README",
  },
];

// function to write README file
function writeToFile(data) {
  let markdown = data;
  inquirer
    .prompt([
      {
        name: "fileLocation",
        message:
          "Insert a path to where you would like to save this README.md file",
      },
    ])
    .then((data) => {
      let saveLocation = data.fileLocation;
      fs.writeFile("./README.md", markdown, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Your file has been created");
        }
        inquirer
          .prompt([
            {
              type: "confirm",
              name: "restartAns",
              message: "Would you like to start the README generation again?",
            },
          ])
          .then((choice) => {
            if (!choice.restartAns) {
              console.log("Thanks for using my README Generator :)");
              return;
            }
            return init();
          });
      });
    });
}

//function to ask relevant questions
function readmeData() {
  inquirer
    .prompt([
      {
        name: questions[1].name,
        message: questions[1].question,
      },
      {
        name: questions[2].name,
        message: questions[2].question,
      },
      {
        name: questions[3].name,
        message: questions[3].question,
      },
      {
        name: questions[4].name,
        message: questions[4].question,
      },
      {
        name: questions[5].name,
        message: questions[5].question,
      },
      {
        name: questions[6].name,
        message: questions[6].question,
      },
      {
        type: "rawlist",
        name: questions[7].name,
        message: questions[7].question,
        choices: ["MIT", "GPL v3", "Apache", "Other"],
      },
      {
        name: questions[8].name,
        message: questions[8].question,
      },
      {
        name: questions[8].name,
        message: questions[8].question,
      },
      {
        name: questions[9].name,
        message: questions[9].question,
      },
    ])
    .then((data) => generateMarkdown(data))
    .then((md) => writeToFile(md));
}

// function to initialize program
function init() {
  inquirer
    .prompt([
      {
        type: "confirm",
        name: questions[0].name,
        message: questions[0].question,
      },
    ])
    .then((ans) => {
      if (!ans.createReadMe) {
        console.log("Maybe next time :(");
        return;
      }
      readmeData();
    });
}

// function call to initialize program
init();
