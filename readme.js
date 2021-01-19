const inquirer = require("inquirer");
const fs = require ("fs");
// Including Inquirer for the user interface and File System for creating files in Node.js


// List of questions
inquirer.prompt(

[
{ type: "input",
message: "What is the name of the project?",
name:"title",
validate: (value)=> {if(value){return true} else {return "please enter your reply to continue"}}
},

{ type: "input",
message: "Who are the authors of the project?",
name:"authors",
validate: (value)=> {if(value){return true} else {return "please enter your reply to continue"}}
},

{ type: "input",
message: "Please breifly describe your project: ",
name:"description",
validate: (value)=> {if(value){return true} else {return "please enter your reply to continue"}}
},

{ type: "input",
message: "Please include installation guidelines:",
name: "installation",
validate: (value)=> {if(value){return true} else {return "please enter your reply to continue"}}


},

{ type: "input",
message: "What languages, frameworks, API's, NMP's are used in your project:",
name: "frameworks",
validate: (value)=> {if(value){return true} else {return "please enter your reply to continue"}}


},

{ type: "input",
message: "What are the usage and application of your project: ",
name: "usage",
validate: (value)=> {if(value){return true} else {return "please enter your reply to continue"}}


},


{ type: "input",
message: "It it possible to contribute to your project: ",
name: "contributions",
validate: (value)=> {if(value){return true} else {return "please enter your reply to continue"}}

},

{ type: "input",
message: "What testing has been performed for your project: ",
name: "tests",
validate: (value)=> {if(value){return true} else {return "please enter your reply to continue"}}

},

{type: "list",
message: "Your project Licenses: ",
name: "license",
choices: [ "Apache", "MIT", "GPL", "None" ],
validate: (value)=> {if(value){return true} else {return "please select your reply to continue"}}
},

{type: "input",
message: "Please enter your emal: ",
name: "email",
validate: (value)=> {if(value){return true} else {return "please enter your reply to continue"}}
},

{type: "input",
message: "Please enter your GitHub username:",
name: "git",
validate: (value)=> {if(value){return true} else{ return "please enter your reply to continue"}}
},

]

).then(({
title,
description,
installation,
usage,
contributions,
tests,
license,
email,
git,
authors
}) =>{

const template = `# ${title}


![License badge](https://img.shields.io/badge/license-${license}-brightgreen)

## Project Description:
${description}

* [Description](#description)
* [Installation](#installation)
* [Additional information](#frameworks)
* [Usage](#usage)
* [Testing](#tests)

# Insatllation
${installation}
## Usage
${usage}
## Contributions
${contributions}
## license
${license}
## Testing Information
${tests}

# Contact
* GitHub: ${git}
* E-mail: ${email}

## For Questions and Suggestions Please Contact ${authors} at:

* GitHub: ${git} 
* E-mail: ${email}`;
createNewFile(title, template );



}

);

//let fileName = title.toLowerCase().split(' ').join('_');

function createNewFile(fileName, data){

fs.writeFile(`./${fileName.toLowerCase().split('').join('')}.md`, data, (err)=>{
    if(err){
console.log(err)
    }
    console.log("readme sucessfully generated");
})

}


