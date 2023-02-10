// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
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

  ![Preview of navigation links](assets/images/readme-instructional.png?raw=true "README Example")

  ${data.usage}

  ## Contributing

  ${data.contributions}

  ## Tests

  ${data.testing}

  ## License

  ${data.licenseSelect}

  ## Questions
  
  GitHub Contact: [github.com/${data.github}]

  Email Contact: [${data.email}]
`;
}

module.exports = generateMarkdown;