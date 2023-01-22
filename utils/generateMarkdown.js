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

    ## Table of Contents
    1. [Installation](#installation)
    2. [Usage](#usage)
    3. [License](#license)
    4. [Contributing](#contributing) 
    5. [Tests](#tests) 
    6. [Questions](#questions) 
    7. [Contributing](#contributing) 


    
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
  ${data.githubUsername}
  ${data.emailAddress}

  `;
  console.log(markdown);
}

module.exports = generateMarkdown;
