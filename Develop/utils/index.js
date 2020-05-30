//init();

const inquirer = require("inquirer");
const fs = require("fs");
//const markdown = require("generateMarkdown");

//don't forget to npm init

/*
the use will be prompted for their Github username and other 
information pretaining to the project the README is for
Following the common templates for user stories we can fram this challenge as follows:

*/

const name = [
  "title",
  "description",
  "TOC",
  "installation",
  "usage",
  "license",
  "contributors",
  "tests",
  "questions",
  "GitHubProfilePic",
  "GitHubEmail",
];

const questions = [
  { type: "input", name: "title", message: "What is your Project Title?" }, //string
  "What is your Description?", // [string]
  "What is your Table of Content? (seperate sections with commas)", //[Array:string] or an object
  "What is your Installation process?", //[string]
  "What is your Usage?", //[string]
  "What is your License?", //[string]
  "Who are your Contributers?", // Array:stri ng ["name", "name2"]
  "What are your Tests?", // [string]
  "What are your Questions?", // [Array:string] ["question 1", "question 2"]
  "User GitHub profile picture", // [string]
  "User Github email", // [string]
];

//from Elias
//https://codesandbox.io/s/reverent-carson-e7p1r?file=/src/index.js
const questionsObjectArray = questions.map((question, i) => {
  return {
    type: "input",
    name: name[i],
    message: question,
  };
});

inquirer.prompt(questionsObjectArray).then((answers) => {
  console.log(answers);
  writeToFile(answers);
});

function writeToFile(response) {
  fs.writeFile("README.md", "# " + response.title + "\n", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Success");
    }
  });

  fs.appendFileSync(
    "README.md",
    "## Project Description" + "\n" + response.description + "\n",
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Success");
      }
    }
  );

  fs.appendFileSync("README.md", "##### Table of Contents" + "\n", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Success");
    }
  });

  const toArray = response.TOC.split(",");
  toArray.forEach((content) => {
    fs.appendFileSync(
      "README.md",
      "* " + `[${content}] ` + `(#${content})` + "\n",
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Success");
        }
      }
    );
  });

  fs.appendFileSync(
    "README.md",
    "## Installation" + "\n" + response.installation + "\n",
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Success");
      }
    }
  );
}

/* function init() {
  //initialize stuff that i need here
}

init();
 */
