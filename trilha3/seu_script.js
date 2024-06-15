// seu_script.js

document.getElementById("simButton").addEventListener("click", respostaSim);
document.getElementById("naoButton").addEventListener("click", respostaNao);
document.getElementById("simButton2").addEventListener("click", respostaSim2);
document.getElementById("naoButton2").addEventListener("click", respostaNao2);
document.getElementById("simButton3").addEventListener("click", respostaSim3);
document.getElementById("naoButton3").addEventListener("click", respostaNao3);
document.getElementById("verificarGeometria").addEventListener("click", verificarGeometria);
document.getElementById("proximaFase").addEventListener("click", proximaFase);

let canvas;
let ctx;
let contadorPontos = 0;
let isDrawing = false; // Variável para rastrear se o usuário está desenhando
let lastX = 0;
let lastY = 0;

function respostaSim() {
    // Adicione um ouvinte de eventos para avançar da pergunta 1 para a pergunta 2
    document.getElementById("pergunta2").style.display = "block";
    document.getElementById("question1").style.display = "none";
     // Ocultar o botão "START"
     document.getElementById("startButton").style.display = "none";
}

document.getElementById("simButton").addEventListener("click", function () {
    // Oculta o botão "START" após clicar
    document.getElementById("simButton").style.display = "none";
    
    // Oculta a pergunta após clicar
    document.getElementById("pergunta").style.display = "none";
});

function respostaNao() {
    Swal.fire({
        title: 'Veja o Vídeo',
        text: 'Assista ao nosso vídeo para obter mais informações.',
        icon: 'info',
        confirmButtonText: 'Fechar'
    });
}

function respostaSim2() {
    document.getElementById("pergunta2").style.display = "none";
    document.getElementById("planoCartesiano").style.display = "block";
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    // Adicione um ouvinte de clique no canvas
    canvas.addEventListener("mousedown", iniciarDesenho);
    canvas.addEventListener("mousemove", desenhar);
    canvas.addEventListener("mouseup", pararDesenho);
    canvas.addEventListener("mouseout", pararDesenho);

    // Defina o plano cartesiano para branco
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Adicione um ouvinte de clique no canvas
    canvas.addEventListener("click", marcarPonto);
    // Adicione um ouvinte de clique no canvas
    canvas.addEventListener("mousedown", iniciarDesenho);
    canvas.addEventListener("mouseup", desenhar);
    canvas.addEventListener("mouseout", pararDesenho);
}

function respostaNao2() {
    Swal.fire({
        title: 'Veja o Vídeo',
        text: 'Assista ao nosso vídeo para obter mais informações.',
        icon: 'info',
        confirmButtonText: 'Fechar'
    });
}

// Captura o elemento HTML do botão "NÃO"
const noButton = document.getElementById("no-button");

// Adiciona um ouvinte de eventos ao botão "NÃO"
noButton.addEventListener("click", function() {
    // Esconde o botão "NÃO" definindo a propriedade 'display' como 'none'
    noButton.style.display = "none";
});;

function marcarPonto(event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Desenhe o ponto onde o mouse está
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 2);
    ctx.fill();

    // Adicione a letra ao ponto
    const letra = String.fromCharCode(65 + contadorPontos); // A, B, C, ...
    ctx.fillStyle = "black";
    ctx.font = "bold 12px Arial";
    ctx.fillText(letra, x - 3, y - 7);

    contadorPontos++;

    // Exiba a próxima pergunta após marcar um ponto
    document.getElementById("pergunta3").style.display = "block";
}

//function respostaSim3() {
    // Exiba a mensagem "Como saber" após a resposta "Sim"
 //   Swal.fire({
 //       title: 'Como saber?',
  //      text: 'Não é possível identificar a posição relativa no plano, sem introduzir o sistema de coordenadas neste plano. Para prosseguir com a sua interação na aprendizagem com os o    bjetos propostos no visor, clique no botão NÃO.',
 //       icon: 'info',
  //      confirmButtonText: 'Fechar',
  //      footer: '<a href="">Why do I have this issue?</a>'
 //   });
//}

//
//
function respostaSim3() {
    // Exiba um Sweet Alert com um campo de entrada de texto
    Swal.fire({
        title: 'Por que?',
        input: 'text',
        text: 'Explique na caixa abaixo por que é possível.',
        inputPlaceholder: 'Insira a sua explicação aqui!',
        showCancelButton: true,
        confirmButtonText: 'Verificar',
        cancelButtonText: 'Cancelar',
        showLoaderOnConfirm: true,
        preConfirm: (inputValue) => {
            // Faça a verificação do valor digitado
            if (inputValue.trim() === "") {
                Swal.showValidationMessage('Por favor, digite as coordenadas.');
            } else {
                // Trate o valor digitado aqui (por exemplo, compare com a resposta correta)
                // Se estiver correto, exiba a mensagem informativa
                if (inputValue === "CoordenadasCorretas") {
                    Swal.fire({
                        title: 'Como saber?',
                        text: `Você inseriu as coordenadas corretas: ${inputValue}. Não é possível identificar a posição relativa no plano sem introduzir o sistema de coordenadas. Para mais informações clique no link para conversar com a Inteligência Artificial (IA) ou clique no botão NÃO, para prosseguir.`,
                        icon: 'info',
                        confirmButtonText: 'Fechar',
                        footer: '<a href="Projeto 1.mp4" target="_blank">Converse com a IA</a>',
                    });
                } else {
                    Swal.fire({
                        title: 'Resposta Incorreta',
                        imageUrl: 'img/logo_triste.png',
                        imageWidth: 200,
                        imageHeight: 200,
                        imageAlt: 'Custom image',
                        html: `
                            <strong>Resposta: (${inputValue})</strong>
                            <p>Não é possível identificar a posição relativa de um ponto no plano sem introduzir o sistema de coordenadas.</p> 
                            <p>Para mais informações clique no link para conversar com a <b>Inteligência Artificial (IA)</b> ou clique no botão fechar e em seguida no botão <b>NÃO</b>, para prosseguir.</p>`,
                        icon: 'info',
                        footer: '<a href="Projeto 1.mp4" target="_blank">Converse com a IA</a>',
                        confirmButtonText: 'Fechar'
                    });
                }
            }
        }
    });
}

//
function respostaNao3() {
    // Exiba a próxima pergunta após a resposta "Não"
    document.getElementById("pergunta4").style.display = "block";
}

function verificarGeometria() {
    // Verifique a resposta da pergunta sobre geometria
    const resposta = document.querySelector('input[name="geometria"]:checked');

    if (!resposta) {
        // Se nenhuma opção for selecionada, exiba uma mensagem de erro
        Swal.fire({
            title: 'Erro',
            text: 'Por favor, selecione uma alternativa.',
            icon: 'error',
            confirmButtonText: 'Fechar'
        });
        return;
    }

    switch (resposta.value) {
        case "A":
            // Se a resposta estiver errada (alternativa A), exiba "Estude GA"
            Swal.fire({
                title: 'A resposta está incorreta.',
                text: 'A Geometria Analítica combina geometria e álgebra usando coordenadas numéricas para representar formas geométricas, permitindo cálculos de distâncias, interseções de retas, estudo de cônicas e transformações. É essencial em áreas como física, engenharia e computação gráfica.',
                footer: '<a href="Projeto 1.mp4" target="_blank">Converse com a IA</a>',
                icon: 'error',
                confirmButtonText: 'Fechar'
            });
            break;
        case "B":
            // Se a resposta estiver errada (alternativa B), exiba "Estude GE"
            Swal.fire({
                title: 'A resposta está incorreta.',
                text: 'A Geometria Descritiva é um método gráfico usado em campos como arquitetura e engenharia para representar objetos 3D em 2D. Ela envolve planos de projeção, vistas e projeções que facilitam a comunicação de projetos complexos de forma precisa e clara.',
                footer: '<a href="Projeto 1.mp4" target="_blank">Converse com a IA</a>',
                icon: 'error',
                confirmButtonText: 'Fechar'
            });
            break;
        case "C":
            // Se a resposta for correta (alternativa C), exiba "Você Acertou"
            Swal.fire({
                title: 'Você Acertou',
                text: 'Parabéns! A resposta está correta.A Geometria Plana é uma parte da matemática que se concentra na análise de objetos e figuras geométricas bidimensionais que existem em um plano.',
                footer: '<a href="Projeto 1.mp4" target="_blank">Converse com a IA</a>',
                icon: 'success',
                confirmButtonText: 'Fechar'
            }).then(() => {
                document.getElementById("proximoFase").style.display = "block";
            });
            break;
        case "D":
            // Se a resposta estiver errada (alternativa D), exiba "Estude PA"
            Swal.fire({
                title: 'A resposta está incorreta.',
                text: 'Geometria Fractal é um ramo da matemática que lida com formas complexas e irregulares que exibem auto-semelhança em diferentes escalas. Essas formas são chamadas de fractais e podem ser encontradas na natureza e em muitos processos naturais e artificiais.',
                footer: '<a href="Projeto 1.mp4" target="_blank">Converse com a IA</a>',
                icon: 'error',
                confirmButtonText: 'Fechar'
            });
            break;
    }
}

function proximaFase() {
    // Você pode adicionar a lógica para a próxima fase aqui
    // Por enquanto, redirecionaremos o usuário para a próxima página
    Swal.fire({
        title: 'Próxima Fase',
        text: 'Aqui você pode continuar com a próxima fase do projeto.',
        icon: 'success',
        confirmButtonText: 'Fechar'
    }).then((result) => {
        if (result.isConfirmed) {
            // Redirecionar para a próxima página (substitua 'proxima_pagina.html' pelo URL da próxima página)
            window.location.href = 'https://rscacademy.com.br/';
        }
    });
}


// Adicione um evento de clique ao botão de atualização
document.getElementById("atualizarPagina").addEventListener("click", function () {
    // Recarregue a página atual
    location.reload();
});

// Adicione um evento de clique ao botão de "Aprendizagem"
document.getElementById("botaoAprendizagem").addEventListener("click", function () {
    // Substitua o código abaixo pelo código do seu vídeo incorporado
    // Por exemplo, para incorporar um vídeo do YouTube:
    window.open("Projeto 1.mp4");
});

// Adicione um ouvinte de evento ao botão "Trocar Imagem"
document.getElementById("trocarImagemButton").addEventListener("click", function () {
    // Dispare o clique no elemento de arquivo para abrir o seletor de arquivos
    document.getElementById("imagemInput").click();
});

// Adicione um ouvinte de evento ao elemento de arquivo para lidar com a seleção de imagem
document.getElementById("imagemInput").addEventListener("change", function (event) {
    const file = event.target.files[0]; // Obtenha o arquivo selecionado

    if (file) {
        // Verifique se um arquivo foi selecionado
        const reader = new FileReader();

        reader.onload = function (e) {
            // Quando o arquivo é carregado, defina a imagem do plano cartesiano
            const imagemPlanoCartesiano = document.getElementById("imagemPlanoCartesiano");
            imagemPlanoCartesiano.src = e.target.result;

            // Redefina o canvas para branco
            const canvas = document.getElementById("canvas");
            const ctx = canvas.getContext("2d");
            ctx.fillStyle = "white";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        };

        reader.readAsDataURL(file); // Carregue a imagem como uma URL de dados
    }
});

// Obtenha a altura do menu
const menuHeight = document.getElementById('menu').offsetHeight;

// Adicione uma margem superior à seção após o menu
document.getElementById('home').style.marginTop = menuHeight + 'px';

window.addEventListener('scroll', () => {
    const menu = document.getElementById('menu');
    if (window.scrollY > 0) {
        menu.classList.add('menu-scroll'); // Aplicar estilo quando a página é rolada
    } else {
        menu.classList.remove('menu-scroll'); // Remover estilo quando a página volta ao topo
    }
});

function iniciarDesenho(event) {
    isDrawing = true;
    [lastX, lastY] = [event.clientX - canvas.getBoundingClientRect().left, event.clientY - canvas.getBoundingClientRect().top];
}

function desenhar(event) {
    if (!isDrawing) return;
    const x = event.clientX - canvas.getBoundingClientRect().left;
    const y = event.clientY - canvas.getBoundingClientRect().top;

    // Desenhe a linha
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(x, y);
    ctx.stroke();

    [lastX, lastY] = [x, y];
}

function pararDesenho() {
    isDrawing = false;
}
