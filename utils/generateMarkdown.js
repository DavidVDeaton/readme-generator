// function to generate markdown for README
function generateMarkdown(data) {

    // Variable for badge


    return `
    # ${data.title}
    ---

    # Table of contents
    - [Description](#description)
    - [Language](#language)
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Tests](#tests)
    - [Contributing](#Contributing)
    - [Questions](#questions)

    # Description
    ${data.description}
    # Language
    ${data.language}
    # Installation
    ${data.installation}
    # Usage
    ${data.usage}
    # License
    ${licenseInfo}
    # Tests
    ${data.tests}
    # Contributing
    ${data.contributors}
    # Questions
    ${data.questions}
    ## Creator information  
    ---  
    Github profile: https://github.com/${data.username}  
    Contact email: ${data.email}  

  
  `;
  }
  
  module.exports = generateMarkdown;
  