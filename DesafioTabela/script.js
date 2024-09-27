// array com as equipes de futebol e as pontuações iniciais = 0
const equipes = [
    { nome: "Bota Fogo", pontos: 0 },
    { nome: "Palmeiras", pontos: 0 },
    { nome: "Fortaleza", pontos: 0 },
    { nome: "Flamengo", pontos: 0 },
    { nome: "São Paulo", pontos: 0 },
    { nome: "Bahia", pontos: 0 },
    { nome: "Cruzeiro", pontos: 0 },
    { nome: "Internacional", pontos: 0 },
    { nome: "Atletico MG", pontos: 0 },
    { nome: "Vasco da Gama", pontos: 0 }
];

// Função para atualizar a pontuação
function atualizarPontos(equipe, resultado) {
    if (resultado === 'ganhou') {
        equipe.pontos += 3; 
    } else if (resultado === 'empate') {
        equipe.pontos += 1; 
    } else if (resultado === 'perdeu') {
        equipe.pontos += 0; 
    }
}

// colocar as equipes na ordem
function maiorparamenor() {
const n = equipes.length;
    for (let i = 0; i < n - 1; i++) {
        let indiceMaior = i; 
for (let j = i + 1; j < n; j++) {
            if (equipes[j].pontos > equipes[indiceMaior].pontos) {
                indiceMaior = j;
}
  } if (indiceMaior !== i) {
            const temp = equipes[i];
         equipes[i] = equipes[indiceMaior];
            equipes[indiceMaior] = temp;
}
    }
}


// Função para atualizar a tabela
function atualizar() {
    const tabelaDiv = document.getElementById('tabela');
    tabelaDiv.innerHTML = ''; // tive que colocar isso aqui porque tava criando uma tabela inteira toda 
    //vez que atualizava, entao assim limpa a tabela anterior para não duplicar

    maiorparamenor(); 

   
    // um for lindo pelas equipes  
    equipes.forEach(function(equipe) {
        // Cria uma nova div para cada equipe
        const equipeDiv = document.createElement('div');
        equipeDiv.textContent = `${equipe.nome}: ${equipe.pontos} pontos`;

        // Adiciona a div na "tabela"
        tabelaDiv.appendChild(equipeDiv);
    });
}

document.getElementById('atualizar').addEventListener('click', function() {
    const equipeSelecionada = document.getElementById('times').value; // Recebe o time selecionado
    const resultado = document.getElementById('resultado').value; // Recebe o resultado selecionado

    // Encontra a equipe no array de equipes com essa funcao find  
    const equipe = equipes.find(function(equipe) {
        return equipe.nome === equipeSelecionada; // Compara o nome da equipe com a seleção do usuário
    });

    // verificar se as variaveis nao estao nulas ne, acho importante  
    if (equipe != "" && resultado != "") {
        atualizarPontos(equipe, resultado); // Atualiza a pontuação :D
        atualizar(); // atualiza a tabela pq se nao tudo que eu fiz nao serviu de nada kkkk 
    }
});

// atualiza a tabela da primeira vez que a pagina carregar 
atualizar();
