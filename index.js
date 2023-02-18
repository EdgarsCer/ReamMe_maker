const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
        {
        type: "input",
        name: "title",
        message: "whats the title of this the project?",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log("You have to Enter you project title.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Give me a description of this project.",
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log("You have to Enter some description here!");
                return false;
            }
        }
    },
    {
        type:"input",
        name:"usage",
        message:"Whats the usage of this program?",
    },
    {
        type: "input",
        name: "installation",
        message:"Provide installation process for this app? (If needed!)",
        default:"npm i"
    },
    {
        type:"list",
        name:"license",
        message:"License used for this project.",
        choices:['Apache', 'Mozilla', 'MIT', 'GNU', 'Boost',]
    },
    {
        type:"input",
        name:"contribute",
        message:"Any guide lines for contributing to this project?",
    },
    {
        type: "input",
        name:"test",
        message:"What command runs test?",
        default:"npm run test",
    },
    {
        type: "input",
        name:"Questions",
        message:"provide your Email if you want questions.",
    },
    {
        type: "input",
        name:"contents",
        message:"",
    },
]

// function to write README file
function writeToFile(fileName, data){
     return fs.writeFileSync(path.join(process.cwd(), fileName), data) 
        
 }


// function to initialize program
function init() {
inquirer.prompt(questions).then((information) => {
    console.log("Generating.")
    writeToFile("README.md", generateMarkdown({...information}))
})
}

// function call to initialize program
init();
