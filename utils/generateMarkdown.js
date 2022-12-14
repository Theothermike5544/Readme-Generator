// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'Apache-2.0') {
    return `[![License: ${license}](https://img.shields.io/badge/License-Apache_2.0-yellowgreen)]`;
  } else if (license == 'GNU GPL V3') {
    return `[![License: ${license}](https://img.shields.io/badge/License-GPLv3-lightblue)]`;
  } else if (license == 'MIT') {
    return `[![License: ${license}](https://img.shields.io/badge/License-MIT-yellow)]`;
  } else {
    return '';
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'Apache-2.0') {
    return `(https://opensource.org/licenses/Apache-2.0)`;
  } else if (license == 'GNU GPL V3') {
    return `(https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license == 'MIT') {
    return `(https://opensource.org/licenses/MIT)`;
  } else {
    return '';
  }
};


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'Apache-2.0') {
    return `This application is protected under the ${license} license. Please visit this [link](https://choosealicense.com/licenses/apache-2.0/) for more information.`;
  } else if (license == 'GNU GPL V3') {
    return `This application is protected under the ${license} license. Please visit this [link](https://choosealicense.com/licenses/gpl-3.0/) for more information.`;
  } else if (license == 'MIT') {
    return `This application is protected under the ${license} license. Please visit this [link](https://choosealicense.com/licenses/mit/) for more information.`;
  } else {
    return `This application's current license is unavailable at this time.`;
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

# ${data.title}

${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}

## Description

  ${data.description}

## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Links](#links)
  * [License](#license)
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [Questions](#questions)
  
  
## Installation

  ${data.installation}

## Usage

  ${data.usage}

 ## Links
 
  * Application URL: (https://${data.username}.github.io/${data.repository}/)
  * Github Repository URL: (https://github.com/${data.username}/${data.repository})
  * Video Walk-Through URL: (https://drive.google.com/file/d/1yuFVobr6ZsssxxzpFf0FzLAohi7pDupB/view)

${renderLicenseSection(data.license)}

  ${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}

## Contributions

  ${data.contributing}

## Tests

  ${data.tests}

## Questions

  [![GitHub](https://img.shields.io/badge/My%20GitHub-Click%20Me!-blueviolet?style=plastic&logo=GitHub)](https://github.com/${data.username}) 
  [![LinkedIn](https://img.shields.io/badge/My%20LinkedIn-Click%20Me!-grey?style=plastic&logo=LinkedIn&labelColor=blue)](https://www.linkedin.com/in/michael-bishop-1b3358104/)
  Feel free to reach me at ${data.email} with any question regarding this project!

  `;

}

module.exports = generateMarkdown;
