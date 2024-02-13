# team-profile-generator
A command line team profile generator

Here the aim is to create an application that generates HTML files using input from a command-line interface.

## User Story

**AS A** manager  
**I WANT** to generate a webpage that displays my team's basic info  
**SO THAT** I have quick access to their emails and GitHub profiles

## Instruction

Create a command-line application that accepts user input using the provided starter code.

Create classes for each team member provided and export them. The tests for these classes, which are located in the _tests_ directory, must ALL pass.

The first class is an Employee parent class with the following properties and methods:

- name
- id
- email
- getName()
- getId()
- getEmail()
- getRole()—returns 'Employee'

The other three classes will extend Employee.

In addition to Employee's properties and methods, Manager will also have the following:

- officeNumber
- getRole()—overridden to return 'Manager'

In addition to Employee's properties and methods, Engineer will also have the following:

- github—GitHub username
- getGithub()
- getRole()—overridden to return 'Engineer'

In addition to Employee's properties and methods, Intern will also have the following:

- school
- getSchool()
- getRole()—overridden to return 'Intern'

## Use

Write code in index.js that uses Inquirer to gather information about the development team members and creates objects for each team member using the correct classes as blueprints.

When a user starts the application, they're prompted to enter the team manager's:

- Name
- Employee ID
- Email address
- Office number

When a user enters those requirements, the user is presented with a menu with the option to:

- Add an engineer
- Add an intern
- Finish building the team

When a user selects the engineer option, the user is prompted to enter the following and then taken back to the menu:

- Engineer's Name
- ID
- Email
- GitHub username

When a user selects the intern option, the user is prompted to enter the following and then taken back to the menu:

- Intern’s name
- ID
- Email
- School

When a user decides to finish building their team, they exit the application and the HTML is generated.

The render function will generate and return a block of HTML including templated div elements for each employee.

Create an HTML file using the HTML returned from the render function.

Write it to a file named team.html in the output folder.

You can use the provided variable outputPath to target this location.


![Alt text](<Screenshot 2024-02-13 at 22.31.45.png>)
