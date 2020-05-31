const fs = require("fs");

const names = [
  "Installation",
  "Usage",
  "License",
  "Contributors",
  "Tests",
  "Questions",
];

const writeToFile = (response) => {
  fs.writeFile("Generated_README.md", "", (err) => {
    if (err) {
      console.log(err);
    } else {
    }
  });
  fs.appendFileSync(
    "Generated_README.md",
    "# " +
      response.title +
      "\n \n" +
      "[![Build Status](https://img.shields.io/github/followers/ffejcaplan?style=social)](https://github.com/ffejcaplan?tab=followers)" +
      "\n \n" +
      "## " +
      "Project Description" +
      "\n" +
      response.description,
    (err) => {
      if (err) {
        console.log(err);
      } else {
      }
    }
  );
  if (response.TOC == true) {
    fs.appendFileSync(
      "Generated_README.md",
      "\n \n" + "## Table of Contents" + "\n",
      (err) => {
        if (err) {
          console.log(err);
        } else {
        }
      }
    );

    names.forEach((content) => {
      const contentLC = content.toLowerCase();
      fs.appendFileSync(
        "Generated_README.md",
        "* " + `[${content}]` + `(#${contentLC})` + "\n",
        (err) => {
          if (err) {
            console.log(err);
          } else {
          }
        }
      );
    });
  }

  fs.appendFileSync(
    "Generated_README.md",
    "\n \n" + "## " + "Installation" + "\n" + response.installation,
    (err) => {
      if (err) {
        console.log(err);
      } else {
      }
    }
  );
  fs.appendFileSync(
    "Generated_README.md",
    "\n \n" + "## " + "Usage" + "\n" + response.usage,
    (err) => {
      if (err) {
        console.log(err);
      } else {
      }
    }
  );
  fs.appendFileSync(
    "Generated_README.md",
    "\n \n" + "## " + "License" + "\n" + response.license,
    (err) => {
      if (err) {
        console.log(err);
      } else {
      }
    }
  );
  fs.appendFileSync(
    "Generated_README.md",
    "\n \n" + "## " + "Contributors" + "\n" + response.contributors,
    (err) => {
      if (err) {
        console.log(err);
      } else {
      }
    }
  );
  fs.appendFileSync(
    "Generated_README.md",
    "\n \n" + "## " + "Tests" + "\n" + response.tests,
    (err) => {
      if (err) {
        console.log(err);
      } else {
      }
    }
  );
  fs.appendFileSync(
    "Generated_README.md",
    "\n \n" +
      "## " +
      "Questions" +
      "\n" +
      `If you have any questions about the repo, open an issue or contact me directly at ${
        response.GitHubEmail
      } ${"\n"} ![GitHub Image](${response.GitHubPic})`,
    (err) => {
      if (err) {
        console.log(err);
      } else {
      }
    }
  );
};

module.exports = { writeToFile: writeToFile };
