document.getElementById('atualizar').addEventListener('click', function() {
    const timeSelecionado = document.getElementById('times').value;
    const resultadoSelecionado = document.getElementById('resultado').value;

  
    let pontos = 0;

    switch (resultadoSelecionado) {
        case 'ganhou':
            pontos = 3;
            break;
        case 'perdeu':
            pontos = 0;
            break;
        case 'empate':
            pontos = 1;
            break;
    }

    const celulaPontos = document.querySelector(`.pontos[nome-time="${timeSelecionado}"]`);
    celulaPontos.textContent = parseInt(celulaPontos.textContent) + pontos;
});
