const generateTeam = (team) => {
  console.log(team);
  const html = [];
  const generateManager = (manager) => {
    console.log(manager);
    let managerHtml = `
        <div class="card" style="width: 18rem">
            <div class="card-header">
            ${manager.name} <br/>
            <i class="fas fa-mug-hot"><i>Manager</div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item>ID ${manager.id}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
            <li class="list-group-item>Office Number: ${manager.officeNumber}</li>
            </ul>
        </div>
        `;
    html.push(managerHtml);
  };
  const generateEngineer = (engineer) => {
    console.log(engineer);
    let engineerHtml = `
      <div class="card" syle="width: 18rem;">
        <div class="card-header">
        ${engineer.name}<br/>
      <i class ="fas fa-glasses"></i>Engineer</div>
      <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${engineer.id}</li>
      <li class="list-group-item">Email: <span id="email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
      <li class="list-group-item">Github Username: <a target="_blank" href="https://github.com/${engineer.githubUsername}">${engineer.githubUsername}</a></li>
      </ul>
      </div>
      `;
    html.push(engineerHtml);
  }
  const generateIntern = intern => {
    console.log(intern);
    let internHtml = `
      <div class="card" syle="width: 18rem;">
        <div class="card-header">
        ${intern.name}<br/>
      <i class ="fas fa-graduate"></i>Intern</div>
      <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${intern.id}</li>
      <li class="list-group-item">Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
      <li class="list-group-item">School: ${intern.school}</li> 
      </ul>
      </div>
      `;
    html.push(internHtml);
  };

  for (let i = 0; i < team.lenth; i++) {
    if (team[1].getRole() === "manager") {
      generateManager(team[i]);
    }
  }
};
