// TODO: Render manager card
const renderManager = (data) => {
  //   console.log(data);
  let arrayofManagers = data.filter(
    (employee) => employee.getRole() === "Manager"
  );
  //   console.log(arrayofManagers);
  let managerHTML = [];
  arrayofManagers.forEach((manager) => {
    managerHTML.push(`<!-- Manager Card -->
              <div class="col-md-4">
                <div class="card shadow mt-5" style="width: 18rem">
                  <div class="card-body bg-primary text-white">
                    <h3 class="card-title">${manager.name}</h3>
                    <h3 class="card-text">Manager</h3>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${manager.id}</li>
                    <li class="list-group-item">
                    Email:
                    <a href="mailto:${manager.email}">${manager.email}</a>
                    </li>
                    <li class="list-group-item">Office number: ${manager.officeNumber}</li>
                  </ul>
                </div>
              </div>`);
  });
  //   console.log(managerHTML);
  return managerHTML.join("");
};

// TODO: Render engineer card
const renderEngineer = (data) => {
  //   console.log(data);
  let arrayofEngineers = data.filter(
    (employee) => employee.getRole() === "Engineer"
  );
  //   console.log(arrayofEngineers);
  let engineerHTML = [];
  arrayofEngineers.forEach((engineer) => {
    engineerHTML.push(`<!-- Engineer Card -->
    <div class="col-md-4">
      <div class="card shadow mt-5" style="width: 18rem">
        <div class="card-body bg-primary text-white">
          <h3 class="card-title">${engineer.name}</h3>
          <h3 class="card-text">Engineer</h3>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${engineer.id}</li>
          <li class="list-group-item">
                    Email:
                    <a href="mailto:${engineer.email}">${engineer.email}</a>
          </li>
          <li class="list-group-item">
          GitHub:
          <a href="https://github.com/${engineer.getGithub()}" target="_blank"
            >${engineer.getGithub()}</a
          >
        </li>
        </ul>
      </div>
    </div>`);
  });
  //   console.log(engineerHTML);
  return engineerHTML.join("");
};

// TODO: Render intern card
const renderIntern = (data) => {
  //   console.log(data);
  let arrayofInterns = data.filter(
    (employee) => employee.getRole() === "Intern"
  );
  //   console.log(arrayofInterns);
  let internHTML = [];
  arrayofInterns.forEach((intern) => {
    internHTML.push(`<!-- Intern Card -->
        <div class="col-md-4">
          <div class="card shadow mt-5" style="width: 18rem">
            <div class="card-body bg-primary text-white">
              <h3 class="card-title">${intern.name}</h3>
              <h3 class="card-text">Intern</h3>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${intern.id}</li>
              <li class="list-group-item">
                    Email:
                    <a href="mailto:${intern.email}">${intern.email}</a>
              </li>
              <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
          </div>
        </div>`);
  });
  //   console.log(internHTML);
  return internHTML.join("");
};

const generateHTML = (data) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <!-- Bootstrap -->
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
        crossorigin="anonymous"
      />
    </head>
    <body>
      <!-- Navbar as a heading -->
      <nav class="navbar-light bg-danger p-5">
        <div class="container-fluid">
          <h1 class="mb-0 h1 text-center text-white">My Team</h1>
        </div>
      </nav>
      <div class="container">
        <div class="row justify-content-center">
        ${renderManager(data)}
        ${renderEngineer(data)}
        ${renderIntern(data)}
        </div>
      </div>
    </body>
  </html>`;
};

module.exports = generateHTML;

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
