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
  fs.writeFile(
    "README.md",
    "# " +
      response.title +
      "\n \n" +
      "## " +
      "Project Description" +
      "\n" +
      response.description +
      "\n",
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Success");
      }
    }
  );

  if (response.TOC == true) {
    fs.appendFile("README.md", "##### Table of Contents" + "\n", (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Success");
      }
    });

    names.forEach((content) => {
      fs.appendFile(
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
  }

  names.forEach((namely) => {
    fs.appendFile(
      "README.md",
      "## " + namely + "\n" + response[namely] + "\n",
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Success");
        }
      }
    );
  });
};

module.exports = { writeToFile: writeToFile };
