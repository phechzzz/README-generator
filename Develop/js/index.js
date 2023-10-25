// Import all packages and functions required
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown.js');
const renderLicenseBadge = require('./generateMarkdown').renderLicenseBadge;
const renderLicenseLink = require('./generateMarkdown').renderLicenseLink;
const renderLicenseSection = require('./generateMarkdown').renderLicenseSection;

// This function formats the user answers into markdown 
function generateREADME(answers) {
  const licenseSection = answers.licenses !== 'No License' ? renderLicenseSection(answers.licenses) : '';
    let readmeContent = `
  # ${answers.projectName}
  
  ## Description
  ${answers.description}
  `
  
  if (answers.createTableOfContents) {
    readmeContent += `
## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)
`;
  }

  readmeContent += licenseSection;

  readmeContent +=`
  ## Installation
  ${answers.installation}
  
  ## Usage
  ${answers.usage}
  
  ## Contributing
  ${answers.contributors}
  
  ## Tests
  ${answers.tests}
  
  ## Questions
If you have any questions, please feel free to reach out to me at [${answers.email}](mailto:${answers.email}).\
To see more of my work, check out my [GitHub](https://github.com/${answers.gitHub}) page.
`;
  
    return readmeContent;
  }


function init(){
//Array of questions that will be prompted when node is run
  const questions = [
    {
        type: 'input',
        name: 'projectName',
        message: 'Enter the name or title of your project',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a description of your project (think WHAT, WHY, HOW)',
    },
    {
        type: 'confirm',
        name: 'createTableOfContents',
        message: 'Do you want to include a table of contents in your README?',
        default: true, 
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.'
    },
    {
        type: 'list',
        name: 'licenses',
        message: 'Which licence do you have?',
        choices: ['No License','Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Add any contributors, including other developers, third party assets, and links to tutorials if used'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Create tests and describe how to run them here'
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    }

];

inquirer
    .prompt(questions)
    .then((answers) => {
      // Process user answers
      const readmeContent = generateREADME(answers);
      writeToFile('README.md', readmeContent);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}


// This function writes the README content to a new README.md file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
          console.error('Error writing the file:', err);
        } else {
          console.log(`${fileName} has been successfully written.`);
        }
      });
}

const fileName = 'README.md';
const readmeContent = ``

// Function call to initialize app
init();

