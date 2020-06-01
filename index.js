const inquirer = require("inquirer");
const fs = require("fs");
const markdown = require("./generateMarkdown");

//questions to prompt user
const questions = [
  { type: "input", name: "title", message: "What is your Project Title?" },
  { type: "input", name: "description", message: "What is your Description?" },
  {
    //confirms whether or not user would like a TOC
    type: "confirm",
    name: "TOC",
    message: "Would you like to include a Table of Contents?",
  },
  {
    type: "input",
    name: "installation",
    message: "What is your Installation process?",
  },
  { type: "input", name: "usage", message: "What is your Usage?" },
  { type: "input", name: "license", message: "What is your License?" },
  {
    type: "input",
    name: "contributors",
    message: "Who are your Contributors?",
  },
  { type: "input", name: "tests", message: "What are your Tests?" },
  { type: "input", name: "GitHubPic", message: "User GitHub profile picture" },
  { type: "input", name: "GitHubEmail", message: "User Github email" },
];

//prompts the user
inquirer.prompt(questions).then((answers) => {
  console.log(answers);
  markdown.writeToFile(answers);
});
