class Team {
    constructor(name, points = 0) {
        this.name = name;
        this.points = points;
    }

    updatePoints(result) {
        if (result === 'ganhou') {
            this.points += 3;
        } else if (result === 'empate') {
            this.points += 1;
        }
    }
}

const teams = [
    new Team("Bota Fogo"),
    new Team("Palmeiras"),
    new Team("Fortaleza"),
    new Team("Flamengo"),
    new Team("São Paulo"),
    new Team("Bahia"),
    new Team("Cruzeiro"),
    new Team("Internacional"),
    new Team("Atletico MG"),
    new Team("Vasco da Gama")
];

function renderTable() {
    const tabelaDiv = document.getElementById('tabela');
    tabelaDiv.innerHTML = ''; 

    teams.forEach(team => {
        const teamDiv = document.createElement('div');
        teamDiv.classList.add('team-row');
        
        const nameDiv = document.createElement('div');
        nameDiv.textContent = team.name;
        
        const pointsDiv = document.createElement('div');
        pointsDiv.textContent = team.points;
        pointsDiv.classList.add('team-points');
        
        teamDiv.appendChild(nameDiv);
        teamDiv.appendChild(pointsDiv);
        tabelaDiv.appendChild(teamDiv);
    });
}

document.getElementById('atualizar').addEventListener('click', function() {
    const selectedTeamName = document.getElementById('times').value;
    const result = document.getElementById('resultado').value;

    const team = teams.find(team => team.name === selectedTeamName);
    if (team && result) {
        team.updatePoints(result);
        renderTable(); 
    }
});

renderTable();
