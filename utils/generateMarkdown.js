function generateMarkdown(data) {
  let toc = "## Table of Contents\n";
  
  if (data.description) {
    toc += "* [Description](#description)\n";
  }
  
  if (data.usage) {
    toc += "* [Usage](#usage)\n";
  }
  
  if (data.installation) {
    toc += "* [Installation](#installation)\n";
  }
  
  if (data.license) {
    toc += "* [License](#license)\n";
  }
  
  if (data.contribute) {
    toc += "* [Contribute](#contribute)\n";
  }
  
  if (data.test) {
    toc += "* [Test](#test)\n";
  }
  
  if (data.questions) {
    toc += "* [Questions](#questions)\n";
  }
  
  return `
  
  # ${data.title} 
  
  ## Description
  
  ${data.description}
  
  ## Usage
  
  ${data.usage}
  
  ## Installation
  
  ${data.installation}
  
  ## License
  
  ${data.license}
  
  ## Contribute
  
  ${data.contribute}
  
  ## Test
  
  ${data.test}
  
  ## Questions
  
  ${data.questions}
  
  ${toc}
  
  `;
}

module.exports = generateMarkdown;

