const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
var teamMembers = [];
const managerQuestions = [
    {   // Fill html with teamName.
        type: "input",
        message: "What is the name of this team/project?",
        name: "teamTitle"
    },
    {   // There is only 1 manager for a team.
        type: "input",
        message: "Who is the manager of this project?",
        name: "managerName"
    },
    {   // Manager ID.
        type: "input",
        message: "What is the manager's ID?",
        name: "managerID"
    },
    {   // Manager Email.
        type: "input",
        message: "What is the manager's email?",
        name: "managerEmail"
    },
    {   //Manager office number
        type: "input",
        message: "What is the manager's office number?",
        name: "officeNumber"
    }]

const employeeQuestions = [
     {
            type: "list",
            message: "What is this employee's role?",
            name: "employeeRole",
            choices: ["Intern", "Engineer"]
        },
]



function managerData() {
    inquirer.prompt(managerQuestions).then(function(answer){
            const manager = new Manager(answer.managerName,answer.managerID,answer.managerEmail,answer.officeNumber);
            teamMembers.push(manager)
            inquirer.prompt(employeeQuestions).then(employeeAnswers=>{
                // make an employee
                if (employeeAnswers.employeeRole === "Intern"){
            inquirer.prompt(internQuestions).then(internAnswers=>{
                const intern = new Intern(answer.internName,answer.internID,answer.internEmail,answer.school);})
                } else {
            inquirer.prompt(engineerQuestions).then(engineerAnswers=>{
                const engineer = new Engineer(answer.engineerName,answer.engineerID,answer.engineerEmail,answer.github);})
                }
                })
                
           




            // const htmlString = render(teamMembers)
            // fs.writeFile("team.html",htmlString,(err)=>{
            //     if (err) throw err
            // console.log("Message written to file")
            // });
            
            console.log(teamMembers);
        })
}



managerData()

       

        // //==================================================================
        // // These questions are based on the employeeRole above.
        // //==================================================================
        // {
        //     type: "input",
        //     message: "What is the employee's name?",
        //     name: "employeeName"
        // },
        // {
        //     type: "input",
        //     message: "What is the employee's id?",
        //     name: "employeeId"
        // },
        // {
        //     type: "input",
        //     message: "What is the employee's email?",
        //     name: "employeeEmail"
        // },
        // {
        //     type: "input",
        //     message: "What is the Engineer's Github?",
        //     name: "github",

        // },
        // {
        //     type: "input",
        //     message: "What's the Intern's school?",
        //     name: "school",
        
        // },
        // {
        //     type: "confirm",
        //     name: "newEmployee",
        //     message: "Would you like to add another team member?"
        // }
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
