// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {

  // Selection checkers for each license, linking to a customized badge that will be returned and displayed on the readme
  if(license === "MIT") {
    return "![MIT License](https://img.shields.io/badge/License-MIT-red.svg)"
  }
  else if (license === "GPLv2") {
    return "![GPLv2 License](https://img.shields.io/badge/License-GPLv2-green.svg)"
  }
  else if (license === "Apache") {
    return "![Apache License](https://img.shields.io/badge/License-Apache-red.svg)"
  }
  else if (license === "GPLv3") {
    return "![GPLv3 License](https://img.shields.io/badge/License-GPLv3-green.svg)"
  }
  else if (license === "BSD 3-clause") {
    return "![BSD 3-clause License](https://img.shields.io/badge/License-BSD3-blue.svg)"
  }
  else {
    return "N/A";
  }
}

// Function that returns the license section of README
function renderLicenseSection(license) {

  // Selection checkers for each license, that will return a statement of the selected license.
  if(license === "MIT") {
    return "MIT License - See LICENSE file contained within directory for more details."
  }
  else if (license === "GPLv2") {
    return "GPLv2 License - See LICENSE file contained within directory for more details."
  }
  else if (license === "Apache") {
    return "Apache License - See LICENSE file contained within directory for more details."
  }
  else if (license === "GPLv3") {
    return "GPLv3 License - See LICENSE file contained within directory for more details."
  }
  else if (license === "BSD 3-clause") {
    return "BSD 3-clause License - See LICENSE file contained within directory for more details."
  }
  else {
    return "N/A";
  }

}

// Function to generate markdown for README
function generateMarkdown(data) {

  // Saves the license from index.js to a variable so it can be called for 2 difference functions
  let licensePick = `${data.licenseSelect}`

  return `
  # ${data.title}

  ##

  ${renderLicenseBadge(licensePick)}

  ## Description
  
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)

  ## Installation

  ${data.install}


  ## Usage

  ${data.usage}

  ## Contributing

  ${data.contributions}

  ## Tests

  ${data.testing}

  ## License

  ${renderLicenseSection(licensePick)}

  ## Questions
  
  GitHub Contact: [${data.github}](https://www.github.com/${data.github})

  Email Contact: [${data.email}]
`;
}

module.exports = generateMarkdown;