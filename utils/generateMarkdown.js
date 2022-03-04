// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  (https://img.shields.io/badge/license-${answers.license}-red)
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  (https://opensource.org/licenses/${answers.license})
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  #${answers.title} 
  //put renderLicenseBadge here
  ---


  #Table of Contents:
  1. [Contributors](#contributors:)
  2. [Contact](#contact:)
  3. [Description](#description:)
  4. [Installation](#installation:)
  5. [Usage](#usage:)
  6. [Contribution](#contribution:)
  7. [Testing](#testing:)
  8. [License](#license:)

  ##Contributors:
  ###${answers.authors}


  ##Contact:
  Email: ${answers.email}
  GitHub: https://github.com/${answers.github}
  

  ## Description:
  ${answers.description}
---


  ## Installation:
  ${answers.install}


  ## Usage:
  ${answers.usage}


  ## Contribution:
  ${answers.contribute}


  ## Testing:
  ${answers.testing}
---


  ## License:
  ${answers.license}
  // put renderLicenseSection here
  // put renderLicenseLink here
`;
}

module.exports = generateMarkdown;
