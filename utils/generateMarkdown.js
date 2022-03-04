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
1. [Contributors](#contributors)
2. [Contact](#contact)
3. [Description](#description)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Contribution](#contribution)
7. [Testing](#testing)
8. [License](#license)

---

## <a name="contributors">Contributors:</a>

### ${answers.authors}

## <a name="contact">Contact:</a>

Email: ${answers.email}

GitHub: https://github.com/${answers.github}


## <a name="description">Description:</a>

${answers.description}


## <a name="installation">Installation:</a>

${answers.install}


## <a name="usage">Usage:</a>

${answers.usage}


## <a name="contribution">Contribution:</a>

${answers.contribute}


## <a name="testing">Testing:</a>

${answers.testing}

## <a name="license">License:</a>

${answers.license}
// put renderLicenseSection here
// put renderLicenseLink here

---

---
`;
}

module.exports = generateMarkdown;
