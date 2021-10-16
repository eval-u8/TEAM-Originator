
var managerArray = teamArr.filter(employee => employee.getRole === 'Manager').map(manager => generateManager(manager));
generateManager = (managerArray) => {
    return `
    <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${managerArray.getName()}</h2>
        <h3 class="card-title">${managerArray.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID:${managerArray.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${managerArray.getEmail()}">${managerArray.getEmail()}</a></li>
            <li class="list-group-item">Office #:${managerArray.getOfficeNumber()}</li>
        </ul>
    </div>
</div>
    `;
};

generateTeam = (teamArr) => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Staff Profiles</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 mb-4 jumbotron bg-success bg-gradient text-white">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="">
                ${generateTeam(teamArr)}
            </div>
        </div>
    </div>
</body>
</html>`;
};

module.exports = generateTeam;
