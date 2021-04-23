// TODO: Render manager card
const renderManager = (data) => {
  let arrayofManagers = data.filter(
    (employee) => employee.getRole() === "Manager"
  );
  let managerHTML = [];
  arrayofManagers.forEach((manager) => {
    managerHTML.push(`<!-- Manager Card -->
              <div class="col-md-4">
                <div class="card shadow mt-5" style="width: 18rem">
                  <div class="card-body bg-primary text-white">
                    <h3 class="card-title">${manager.name}</h3>
                    <h3 class="card-text"><i class="fas fa-mug-hot"></i> Manager</h3>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${manager.id}</li>
                    <li class="list-group-item">
                    Email:
                    <a href="mailto:${manager.email}" class="no-underline">${manager.email}</a>
                    </li>
                    <li class="list-group-item">Office number: ${manager.officeNumber}</li>
                  </ul>
                </div>
              </div>`);
  });
  return managerHTML.join("");
};

// TODO: Render engineer card
const renderEngineer = (data) => {
  let arrayofEngineers = data.filter(
    (employee) => employee.getRole() === "Engineer"
  );
  let engineerHTML = [];
  arrayofEngineers.forEach((engineer) => {
    engineerHTML.push(`<!-- Engineer Card -->
    <div class="col-md-4">
      <div class="card shadow mt-5" style="width: 18rem">
        <div class="card-body bg-primary text-white">
          <h3 class="card-title">${engineer.name}</h3>
          <h3 class="card-text"><i class="fas fa-glasses"></i> Engineer</h3>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${engineer.id}</li>
          <li class="list-group-item">
                    Email:
                    <a href="mailto:${engineer.email}" class="no-underline">${
      engineer.email
    }</a>
          </li>
          <li class="list-group-item">
          GitHub:
          <a href="https://github.com/${engineer.getGithub()}" target="_blank" class="no-underline"
            >${engineer.getGithub()}</a
          >
        </li>
        </ul>
      </div>
    </div>`);
  });
  return engineerHTML.join("");
};

// TODO: Render intern card
const renderIntern = (data) => {
  let arrayofInterns = data.filter(
    (employee) => employee.getRole() === "Intern"
  );
  let internHTML = [];
  arrayofInterns.forEach((intern) => {
    internHTML.push(`<!-- Intern Card -->
        <div class="col-md-4">
          <div class="card shadow mt-5" style="width: 18rem">
            <div class="card-body bg-primary text-white">
              <h3 class="card-title">${intern.name}</h3>
              <h3 class="card-text">
              <i class="fas fa-user-graduate"></i> Intern
            </h3>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${intern.id}</li>
              <li class="list-group-item">
                    Email:
                    <a href="mailto:${intern.email}" class="no-underline">${
      intern.email
    }</a>
              </li>
              <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
          </div>
        </div>`);
  });
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
      <title>Team Roster</title>
      <!-- Internal CSS -->
      <style>
      .no-underline {
        text-decoration: none;
      }
      </style>
      <!-- Bootstrap -->
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
        crossorigin="anonymous"
      />
      <!-- Font Awesome -->
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
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
