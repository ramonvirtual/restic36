const svg = document.getElementById("svg");
// const coordenadasTexto = document.getElementById("coordenadas-texto");
const perguntaTexto = document.getElementById("pergunta-texto");
const tracarLinhaButton = document.getElementById("tracarLinha");
const respostaSimButton = document.getElementById("respostaSim");
const respostaNaoButton = document.getElementById("respostaNao");
const proximaFaseButton = document.getElementById("proximaFase");
const verRelatorioButton = document.getElementById("verRelatorio"); // Mantenha esta linha
let pontos = [];
let passoAtual = 1;

let pontoA = null;
let pontoB = null;

svg.addEventListener("click", (e) => {
    if (passoAtual === 1) {
        const { offsetX, offsetY } = e;
        const x = Math.round((offsetX - 250) / 50);
        const y = Math.round((250 - offsetY) / 50);
       // coordenadasTexto.textContent = `Coordenadas: (${x}, ${y})`;
        pontos.push({ x, y });
        
        if (!pontoA) {
            // Marcar o ponto A
            pontoA = { x, y };
            // Exibir o ponto A no visor
            const circleA = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            circleA.setAttribute("cx", offsetX);
            circleA.setAttribute("cy", offsetY);
            circleA.setAttribute("r", 5);
            circleA.setAttribute("fill", "red");
            svg.appendChild(circleA);
            // Exibir a letra A
            const textA = document.createElementNS("http://www.w3.org/2000/svg", "text");
            textA.setAttribute("x", offsetX + 5);
            textA.setAttribute("y", offsetY - 5);
            textA.textContent = "A";
            svg.appendChild(textA);
            
            perguntaTexto.textContent = "Agora marque um ponto onde o personagem da Princesa está localizado.";
        } else if (!pontoB) {
            // Marcar o ponto B
            pontoB = { x, y };
            // Exibir o ponto B no visor
            const circleB = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            circleB.setAttribute("cx", offsetX);
            circleB.setAttribute("cy", offsetY);
            circleB.setAttribute("r", 5);
            circleB.setAttribute("fill", "blue");
            svg.appendChild(circleB);
            // Exibir a letra B
            const textB = document.createElementNS("http://www.w3.org/2000/svg", "text");
            textB.setAttribute("x", offsetX + 5);
            textB.setAttribute("y", offsetY - 5);
            textB.textContent = "B";
            svg.appendChild(textB);
            
            tracarLinhaButton.style.display = "block";
            perguntaTexto.textContent = "Agora, clique no botão 'Traçar Linha' para ligar os pontos.";
        }
    }
});

tracarLinhaButton.addEventListener("click", () => {
    if (pontoA && pontoB) {
        const linha = document.createElementNS("http://www.w3.org/2000/svg", "line");

        // Coordenadas do centro do ponto A
        const x1 = (pontoA.x * 50) + 250;
        const y1 = 250 - (pontoA.y * 50);

        // Coordenadas do centro do ponto B
        const x2 = (pontoB.x * 50) + 250;
        const y2 = 250 - (pontoB.y * 50);

        linha.setAttribute("x1", x1);
        linha.setAttribute("y1", y1);
        linha.setAttribute("x2", x2);
        linha.setAttribute("y2", y2);
        linha.setAttribute("stroke", "blue");
        linha.setAttribute("stroke-width", 2);
        svg.appendChild(linha);

        perguntaTexto.textContent = "A partir do cenário que exploramos até agora, você consegue fornecer a equação que representa essa reta no plano cartesiano?";
        respostaSimButton.style.display = "block";
        respostaNaoButton.style.display = "block";
        tracarLinhaButton.style.display = "none";
    }
});

respostaSimButton.addEventListener("click", () => {
    Swal.fire({
        title: "Digite sua resposta:",
        input: "text",
        inputPlaceholder: "Digite sua resposta aqui...",
        showCancelButton: true,
        customClass: {
            confirmButton: "custom-confirm-button", // Adicione a classe personalizada aqui
        },
        cancelButtonText: "Cancelar",
        inputValidator: (value) => {
            if (!value) {
                return "Por favor, digite uma resposta.";
            }
        },
    }).then((result) => {
        if (result.isConfirmed) {
            const respostaAluno = result.value;

            // Exiba a resposta do aluno em um alerta
            Swal.fire({
                title: "Resposta do Aluno",
                html: `Você respondeu: ${respostaAluno}. Não é possível identificar a posição relativa no plano sem introduzir o sistema de coordenadas. Para mais informações, clique aqui no botão Converse com a IA ou clique no botão NÃO para prosseguir.`,
                icon: "info",
                showCancelButton: true,
                confirmButtonText:  '<a href="Projeto 1.mp4" target="_blank" style="color:#fff;">Converse com a IA</a>',
                cancelButtonText: "Não",
            });

            // Atualize a resposta da pergunta 1 para "Sim"
            atualizarResposta("pergunta1", "Sim");
        }
    });
});

respostaNaoButton.addEventListener("click", () => {
    Swal.fire("Parabéns!", "Agora você pode avançar para a próxima etapa.")
        .then(() => {
            // Atualize a resposta da pergunta 1 para "Não"
            atualizarResposta("pergunta1", "Não");
            
            // Exiba os botões "Próxima Fase" e "Ver Relatório"
            proximaFaseButton.style.display = "block";
            verRelatorioButton.style.display = "block";
        });
});

// Variáveis para rastrear as respostas do aluno
let respostas = {
    pergunta1: null,
    pergunta2: null,
    pergunta3: null,
};

// Função para atualizar a resposta e verificar se todas as respostas foram coletadas
function atualizarResposta(pergunta, resposta) {
    respostas[pergunta] = resposta;
}

verRelatorioButton.addEventListener("click", () => {
    // Exiba um relatório com as respostas do aluno
    const relatorio = `Resposta da pergunta 1: ${respostas.pergunta1}\n`
                    + `Resposta da pergunta 2: ${respostas.pergunta2}\n`
                    + `Resposta da pergunta 3: ${respostas.pergunta3}`;
    
    Swal.fire("Relatório de Respostas", relatorio);
});

proximaFaseButton.addEventListener("click", () => {
    window.location.href = "proxima_fase.html"; // Substitua pelo link real da próxima fase
});
