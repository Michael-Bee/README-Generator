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
# ${answers.title} //put renderLicenseBadge here

---

## Table of Contents:
1. [Authors](#authors)
2. [Contact](#contact)
3. [Description](#description)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Contribution](#contribution)
7. [Testing](#testing)
8. [License](#license)

---

## <span id="authors">Authors:</span>

### ${answers.authors}

## <span id="contact">Contact:</span>

Email: ${answers.email}

GitHub: https://github.com/${answers.github}


## <span id="description">Description:</span>

${answers.description}


## <span id="installation">Installation:</span>

${answers.install}


## <span id="usage">Usage:</span>

${answers.usage}


## <span id="contribution">Contribution:</span>

${answers.contribute}


## <span id="testing">Testing:</span>

${answers.testing}

## <span id="license">License:</span>

${answers.license}
// put renderLicenseSection here
// put renderLicenseLink here

---

---
`;
}

module.exports = generateMarkdown;
