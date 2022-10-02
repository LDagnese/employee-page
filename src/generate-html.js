const buildTeam = (team) => {
  const buildManager = (manager) => {
    return `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-header bg-dark text-white">${manager.getName()}</h5>
            <h6 class="card-header bg-warning">${manager.getRole()}</h6>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID - ${manager.getId()}</li>
                <li class="list-group-item">Email - <a href="mailto:${manager.getEmail()}"></a>${manager.getEmail()}</li>
                <li class="list-group-item">Office # - ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
    `;
  };

  const buildEngineer = (engineer) => {
    return `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-header bg-dark text-white">${engineer.getName()}</h5>
            <h6 class="card-header bg-warning">${engineer.getRole()}</h6>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID - ${engineer.getId()}</li>
                <li class="list-group-item">Email - <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="list-group-item">Github - <a href="https://github.com/${engineer.getGitHub()}" target="_blank">${engineer.getGitHub()}</a></li>
            </ul>
        </div>
    </div>
    `;
  };

  const buildIntern = (intern) => {
    return `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-header bg-dark text-white">${intern.getName()}</h5>
            <h6 class="card-header bg-warning">${intern.getRole()}</h6>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID - ${intern.getId()}</li>
                <li class="list-group-item">Email - <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-group-item">School - ${intern.getSchool()}</li>
            </ul>
        </div>
    </div>
    `;
  };

  const teamCards = [];

  teamCards.push(
    team.filter((teamMember) => teamMember.getRole() === "Manager").map((manager) => buildManager(manager))
  );
  teamCards.push(
    team.filter((teamMember) => teamMember.getRole() === "Engineer").map((engineer) => buildEngineer(engineer))
  );
  teamCards.push(team.filter((teamMember) => teamMember.getRole() === "Intern").map((intern) => buildIntern(intern)));

  return teamCards.join("");
};

module.exports = (team) => {
  return `
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    </head>

    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 bg-dark text-center">
                    <h1 class="text-white">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12 d-flex justify-content-center">
                    ${buildTeam(team)}
                </div>
            </div>
        </div>
        
    </body>

</html>`;
};
