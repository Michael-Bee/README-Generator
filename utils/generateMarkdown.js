//Array of licenses to choose from
const licenseData = [
{
  id: 'Apache-2.0',
  name: 'Apache License 2.0',
  badge: '[![License: Apache License 2.0](https://img.shields.io/badge/License-Apache%202.0-red.svg)](https://opensource.org/licenses/Apache-2.0)',
  link: '(https://opensource.org/licenses/Apache-2.0)',
  notice: `
Copyright 2022, ${answers.authors}

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.`,
},
{
  id: 'BSD-3-Clause',
  name: 'BSD 3-Clause "New" or "Revised" license',
  badge: '[![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203%20Clause-red.svg)](https://opensource.org/licenses/BSD-3-Clause)',
  link: '(https://opensource.org/licenses/BSD-3-Clause)',
  notice: `
Copyright 2022, ${answers.authors}

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`,
},
{
  id: 'GPL-3.0',
  name: 'GNU General Public License version 3',
  badge: '[![GNU General Public License (GPL)](https://img.shields.io/badge/License-GNU%20GPL%20v3-red.svg)](https://opensource.org/licenses/GPL-3.0)',
  link: '(https://opensource.org/licenses/GPL-3.0)',
  notice: `
Copyright 2022, ${answers.authors}

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program.  If not, see <http://www.gnu.org/licenses/>.`
},
{
  id: 'LGPL-3.0',
  name: 'GNU Lesser General Public License version 3',
  badge: '[![GNU Library or "Lesser" General Public License (LGPL)](https://img.shields.io/badge/License-GNU%20LGPL%20v3-red.svg)](https://opensource.org/licenses/LGPL-3.0)',
  link: '(https://opensource.org/licenses/LGPL-3.0)',
  notice: `
Copyright 2022, ${answers.authors}

Copyright (C) 2007 Free Software Foundation, Inc. <http://fsf.org/>`
},
{
  id: 'MIT',
  name: 'The MIT License',
  badge: '[![The MIT License](https://img.shields.io/badge/License-MIT-red.svg)](https://opensource.org/licenses/MIT)',
  link: '(https://opensource.org/licenses/MIT)',
  notice: `
Copyright 2022, ${answers.authors}

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
},
]

// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   (https://img.shields.io/badge/license-${answers.license}-red)
// }
// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {
//   (https://opensource.org/licenses/${answers.license})
// }
// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}



//Generates markdown for README
function generateMarkdown(answers) {
  return `
# ${answers.title} 

//put renderLicenseBadge here

---

## Table of Contents:
1. [Authors](#authors)
2. [Links] (#links)
3. [Screenshot] (#screenshot)
4. [Description](#description)
5. [Technologies] (#technologies)
6. [Installation](#installation)
7. [Usage](#usage)
8. [Contribution](#contribution)
9. [Testing](#testing)
10. [Questions](#contact)
11. [License](#license)


---

## <span id="authors">Authors:</span>

### ${answers.authors}


## <span id="links">Links:</span>

${answers.links}


## <span id="links">Screenshot:</span>

![ReadMe Generator Demo](demo/ReadMe_Generator_Demo.gif)


## <span id="description">Description:</span>

${answers.description}


## <span id="technologies">Technologies:</span>

${answers.technologies}


## <span id="installation">Installation:</span>

${answers.install}


## <span id="usage">Usage:</span>

${answers.usage}


## <span id="contribution">Contribution:</span>

${answers.contribute}


## <span id="testing">Testing:</span>

${answers.testing}


## <span id="contact">Questions:</span>

Email: ${answers.email}

GitHub: https://github.com/${answers.github}

Please contact with any questions.

## <span id="license">License:</span>


${answers.license}

// put renderLicenseSection here

// put renderLicenseLink here

---

---
`;
}

//Exports markdown to index.js
module.exports = generateMarkdown;
