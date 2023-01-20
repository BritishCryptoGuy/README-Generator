const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = ["Would you like to generate a README.md file?"];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {
  inquirer
    .prompt([
      {
        type: "confirm",
        name: "answer",
        message: questions[0],
      },
    ])
    .then((ans) => {
      if (!ans.answer) {
        console.log("Maybe next time :(");
        return;
      }
      console.log("Great Choice!");
    });
}

// function call to initialize program
init();
