//init();

const inquirer = require("inquirer");
const fs = require("fs");
const markdown = require("./generateMarkdown");

//don't forget to npm init

/*
the use will be prompted for their Github username and other 
information pretaining to the project the README is for
Following the common templates for user stories we can fram this challenge as follows:

*/

const questions = [
  { type: "input", name: "title", message: "What is your Project Title?" }, //string
  { type: "input", name: "description", message: "What is your Description?" }, // [string]
  {
    type: "confirm",
    name: "TOC",
    message: "Would you like to include a Table of Contents?",
  },
  {
    type: "input",
    name: "installation",
    message: "What is your Installation process?",
  }, //[string]
  { type: "input", name: "usage", message: "What is your Usage?" }, //[string]
  { type: "input", name: "license", message: "What is your License?" }, //[string]
  {
    type: "input",
    name: "contributors",
    message: "Who are your Contributers?",
  }, // Array:stri ng ["name", "name2"]
  { type: "input", name: "tests", message: "What are your Tests?" }, // [string]
  { type: "input", name: "questions", message: "What are your Questions?" }, // [Array:string] ["question 1", "question 2"]
  { type: "input", name: "GitHubPic", message: "User GitHub profile picture" }, // [string]
  { type: "input", name: "GitHubEmail", message: "User Github email" }, // [string]
];

inquirer.prompt(questions).then((answers) => {
  console.log(answers);
  markdown.writeToFile(answers);
});

/* function init() {
  //initialize stuff that i need here
}

init();
 */
