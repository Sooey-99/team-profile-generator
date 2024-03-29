const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// Code to gather information about the development team members, and render the HTML file.

function init() {
    inquirer.prompt([
        {
            type:'list',
            name:'Choice',
            message:'What would you like to create?',
            choices:['Manager', 'Intern', 'Engineer']
        }
    ]).then((res)=>{
        console.log(res)
        if(res.Choice === 'Manager'){
            managerQuestions()
        }
    })
}
init();

function managerQuestions() {
    inquirer.prompt([
        {
            type:'input',
            name:'managerName',
            message:'What is your name?',
        },
        {
            type:'input',
            name:'managerEmail',
            message:'What is your email?',
        },
        {
            type:'input',
            name:'managerID',
            message:'What is your ID number?',
        },
        {
            type:'input',
            name:'managerOfficeNumber',
            message:'What is your office number?',
        }
    ]).then((res)=>{
        console.log(res)
    })
}