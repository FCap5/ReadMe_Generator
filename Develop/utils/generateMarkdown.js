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
  fs.writeFile("README.md", "", (err) => {
    if (err) {
      console.log(err);
    } else {
    }
  });
  fs.appendFileSync(
    "README.md",
    "# " +
      response.title +
      "\n \n" +
      //+[![]()]() +
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
      "README.md",
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
        "README.md",
        "* " + `[${content}] ` + `(#${contentLC})` + "\n",
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
    "README.md",
    "\n \n" +
      '<a name="installation"></a>' +
      "\n" +
      "## " +
      "Installation" +
      "\n" +
      response.installation,
    (err) => {
      if (err) {
        console.log(err);
      } else {
      }
    }
  );
  fs.appendFileSync(
    "README.md",
    "\n \n" +
      "<a name='usage'></a>" +
      "\n" +
      "## " +
      "Usage" +
      "\n" +
      response.usage,
    (err) => {
      if (err) {
        console.log(err);
      } else {
      }
    }
  );
  fs.appendFileSync(
    "README.md",
    "\n \n" +
      '<a name="license"></a>' +
      "\n" +
      "## " +
      "License" +
      "\n" +
      response.license,
    (err) => {
      if (err) {
        console.log(err);
      } else {
      }
    }
  );
  fs.appendFileSync(
    "README.md",
    "\n \n" +
      '<a name="contributors"></a>' +
      "\n" +
      "## " +
      "Contributors" +
      "\n" +
      response.contributors,
    (err) => {
      if (err) {
        console.log(err);
      } else {
      }
    }
  );
  fs.appendFileSync(
    "README.md",
    "\n \n" +
      '<a name="tests"></a>' +
      "\n" +
      "## " +
      "Tests" +
      "\n" +
      response.tests,
    (err) => {
      if (err) {
        console.log(err);
      } else {
      }
    }
  );
  fs.appendFileSync(
    "README.md",
    "\n \n" +
      '<a name="questions"></a>' +
      "\n" +
      "## " +
      "Questions" +
      "\n" +
      `If you have any questions about the repo, open an issue or contact me directly at ${
        response.GitHubEmail
      } ${"\n"} ${response.GitHubPic}`,
    (err) => {
      if (err) {
        console.log(err);
      } else {
      }
    }
  );
};

module.exports = { writeToFile: writeToFile };
