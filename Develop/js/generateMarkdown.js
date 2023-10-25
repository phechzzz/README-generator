
// This function renders the corresponding license badge 
function renderLicenseBadge(license) {
  const licenseIcons = {
    'Apache License 2.0': '[![License: Apache License 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)',
    'GNU General Public License v3.0': '[![License: GNU GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    'MIT License': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'BSD 2-Clause "Simplified" License': '[![License: BSD 2-Clause "Simplified" License](https://img.shields.io/badge/License-BSD%202--Clause-blue.svg)](https://opensource.org/licenses/BSD-2-Clause)',
    'BSD 3-Clause "New" or "Revised" License': '[![License: BSD 3-Clause "New" or "Revised" License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
    'Boost Software License 1.0': '[![License: Boost Software License 1.0](https://img.shields.io/badge/License-Boost%201.0-blue.svg)](https://opensource.org/licenses/BSL-1.0)',
    'Creative Commons Zero v1.0 Universal': '[![License: CC0 1.0 Universal](https://img.shields.io/badge/License-CC0%201.0%20Universal-green.svg)](https://creativecommons.org/publicdomain/zero/1.0/)',
    'Eclipse Public License 2.0': '[![License: EPL 2.0](https://img.shields.io/badge/License-EPL%202.0-yellow.svg)](https://opensource.org/licenses/EPL-2.0)',
    'GNU Affero General Public License v3.0': '[![License: GNU AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)',
    'GNU General Public License v2.0': '[![License: GNU GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0)',
    'GNU Lesser General Public License v2.1': '[![License: GNU LGPL v2.1](https://img.shields.io/badge/License-LGPL%20v2.1-blue.svg)](https://www.gnu.org/licenses/old-licenses/lgpl-2.1)',
    'Mozilla Public License 2.0': '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-orange.svg)](https://opensource.org/licenses/MPL-2.0)',
    'The Unlicense': '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)',
    
  };

  return licenseIcons[license] || '';
}

//This function links more info to the selected licnese
function renderLicenseLink(license) {
  const licenseLinks = {
    'Apache License 2.0': 'https://www.apache.org/licenses/LICENSE-2.0',
    'GNU General Public License v3.0': 'https://www.gnu.org/licenses/gpl-3.0',
    'MIT License': 'https://opensource.org/licenses/MIT',
    'BSD 2-Clause "Simplified" License': 'https://opensource.org/licenses/BSD-2-Clause',
    'BSD 3-Clause "New" or "Revised" License': 'https://opensource.org/licenses/BSD-3-Clause',
    'Boost Software License 1.0': 'https://opensource.org/licenses/BSL-1.0',
    'Creative Commons Zero v1.0 Universal': 'https://creativecommons.org/publicdomain/zero/1.0/',
    'Eclipse Public License 2.0': 'https://opensource.org/licenses/EPL-2.0',
    'GNU Affero General Public License v3.0': 'https://www.gnu.org/licenses/agpl-3.0',
    'GNU General Public License v2.0': 'https://www.gnu.org/licenses/old-licenses/gpl-2.0',
    'GNU Lesser General Public License v2.1': 'https://www.gnu.org/licenses/old-licenses/lgpl-2.1',
    'Mozilla Public License 2.0': 'https://opensource.org/licenses/MPL-2.0',
    'The Unlicense': 'http://unlicense.org/',
    
  };

  return licenseLinks[license] || '';
}

//This function renders the licnese section of the README with the content generated above(badge, link)
function renderLicenseSection(license) {
  if (license) {
    const licenseBadge = renderLicenseBadge(license);
    const licenseLink = renderLicenseLink(license);
    const licenseSection = 
   `## License

This project is licensed under the [${license}](${licenseLink}) license. ${licenseBadge}`;

return licenseSection
  }

  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}
//This exports the renderLicenseSection so that it can be used in the index.js file
module.exports ={
  renderLicenseSection
}
