// function to generate markdown for README
function generateMarkdown(data) {
  console.log(
    `# ${data.title}

    ## Description
    ${data.descriptionText}
    
  ## Installation
  ${data.installationText}

  ## Usage 
  ${data.usageText}

  ## License 
  ${data.licenseChoice}

  ## Contributing guidelines
  ${data.contributionText}

  ## Tests
  ${data.testsText}

  ## Questions
  ${data.githubUsername}
  ${data.emailAddress}

  `
  );
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
