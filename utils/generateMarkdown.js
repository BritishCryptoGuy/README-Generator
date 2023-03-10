// function to generate markdown for README
function generateMarkdown(data) {
  let licenseMD = "";
  if (data.licenseChoice === "MIT") {
    licenseMD =
      "[![License: MIT ](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (data.licenseChoice === "Apache") {
    licenseMD =
      "## Description [![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (data.licenseChoice === "GPL v3") {
    licenseMD =
      "[![License: GPL v3 ](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  }
  let markdown = `
  # ${data.title}
  ${licenseMD}
  ---


  ## Description 

  ${data.descriptionText}

  ---

  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contributing](#contributing) 
  5. [Tests](#tests) 
  6. [Questions](#questions) 


    
  ## Installation
  ${data.installationText}

---

  ## Usage 
  ${data.usageText}


---

  ## License 
  ${data.licenseChoice}


---

  ## Contributing <a name="contributing"></a>
  ${data.contributionText}


---

  ## Tests
  ${data.testsText}


---
  
  ## Questions
  In order to reach out for questions and feedback please use the following:

  Github link: [${data.githubUsername}](https://github.com/${data.githubUsername})

  Email adress: ${data.emailAddress}

  `;
  return markdown;
}

module.exports = generateMarkdown;
