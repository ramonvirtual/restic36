let perguntas = [
    {
        pergunta: "Pergunta 1: Qual das trilhas está relacionada ao aprendizado sobre modelos de implantação de nuvem (pública, privada, híbrida, multicloud)?",
        opcoes: ["img/1.png", "img/2.png", "img/3.png", "img/4.png"],
        resposta: "img/1.png",
        mensagemCorreta: "Incrível! Você acertou a Trilha de Aprendizagem!",
        mensagemIncorreta: "Não desanime! Tente novamente e aprenda mais sobre esse empreendedor."
    },
    // Adicione mais perguntas conforme necessário
    {
        pergunta: "Pergunta 2: Qual destes é o empreendedor fundador da Microsoft, uma das maiores empresas de tecnologia do mundo?",
        opcoes: ["img/1.png", "img/2.png", "img/3.png", "img/4.png"],
        resposta: "img/2-BG.png",
        mensagemCorreta: "Fantástico! O Bill Gates é um empreendedor excepcional!",
        mensagemIncorreta: "Não se preocupe! Persista e aprofunde seu conhecimento sobre empreendedores."
    },
    {
        pergunta: "Pergunta 3: Qual destes é o empreendedor fundador da Apple?",
        opcoes: ["img/1.png", "img/2.png", "img/3.png", "img/4.png"],
        resposta: "img/4-SJ.png",
        mensagemCorreta: "Impressionante! Você conhece grandes empreendedores!",
        mensagemIncorreta: "Sem problemas! Continue sua jornada de descoberta e aprofunde seus conhecimentos sobre empreendedores."
    },
    {
        pergunta: "Pergunta 4: Qual é o símbolo que representa a logo do ChatGPT?",
        opcoes: ["img/WhatsApp.png", "img/Instagram.png", "img/facebook.png", "img/ChatGPT.webp"],
        resposta: "img/ChatGPT.webp",
        mensagemCorreta: "Fantástico! Seu conhecimento é verdadeiramente impressionante!",
        mensagemIncorreta: "Não se desanime! Continue explorando e descobrindo novos horizontes. Você está no caminho certo!"
    },
    {
        pergunta: "Pergunta 5. Identifique qual destas opções corresponde ao logo do Instagram?",
        opcoes: ["img/WhatsApp.png", "img/Instagram.png", "img/facebook.png", "img/ChatGPT.webp"],
        resposta: "img/Instagram.png",
        mensagemCorreta: "Incrível! Você identificou corretamente o logo do Instagram.",
        mensagemIncorreta: "Não se preocupe! Continue explorando e familiarizando-se com os logos das redes sociais. Cada acerto é um passo na direção certa!"
    },
    {
        pergunta: "Pergunta 6. Qual destas imagens está relacionada ao marketing digital?",
        opcoes: ["img/boneco.jpg", "img/parquediversoes.png", "img/parquediversoes2.png", "img/lupasite.avif"],
        resposta: "img/lupasite.avif",
        mensagemCorreta: "Parabéns! Você identificou com precisão a imagem relacionada ao marketing digital. Seu conhecimento está afiado!",
        mensagemIncorreta: "Não se preocupe! O marketing digital é um campo amplo. Continue explorando e logo estará reconhecendo todas as nuances dessa área."
    },
    {
        pergunta: "Pergunta 7. Identifique qual destas opções corresponde ao logo do Twitter?",
        opcoes: ["img/WhatsApp.png", "img/Twitter.png", "img/LinkedIn.png", "img/ChatGPT.webp"],
        resposta: "img/Twitter.png",
        mensagemCorreta: "Uau! Você acertou em cheio! Reconheceu com maestria o logo relacionado ao marketing digital. Seu conhecimento é impressionante!",
        mensagemIncorreta: "Não tem problema! Cada tentativa é uma oportunidade de aprendizado. Continue explorando e logo estará dominando os logos das redes sociais."
    },
    {
        pergunta: "Pergunta 8. Qual destas redes sociais é predominantemente usada para networking profissional, onde os usuários podem conectar-se e interagir com colegas de trabalho e empresas?",
        opcoes: ["img/WhatsApp.png", "img/Twitter.png", "img/LinkedIn.png", "img/ChatGPT.webp"],
        resposta: "img/LinkedIn.png",
        mensagemCorreta: "Fantástico! Você acertou em cheio identificando o logo do LinkedIn, a plataforma líder em networking profissional. Seu conhecimento está em ascensão!",
        mensagemIncorreta: "Sem problemas! Cada tentativa é uma oportunidade de aprendizado. Continue explorando os logos das redes sociais e logo será um expert nesse universo dinâmico."
    },
    {
        pergunta: "Pergunta 9. Esta rede social é conhecida por ser uma plataforma de mensagens instantâneas, permitindo o envio de textos, imagens, vídeos e chamadas de voz. Qual é?",
        opcoes: ["img/WhatsApp.png", "img/Twitter.png", "img/LinkedIn.png", "img/ChatGPT.webp"],
        resposta: "img/WhatsApp.png",
        mensagemCorreta: "Incrível! Você acertou em cheio identificando o logo do WhatsApp, a principal plataforma de mensagens instantâneas. Seu conhecimento é notável!",
        mensagemIncorreta: "Sem problemas! Cada tentativa é uma chance de aprender. Continue explorando os logos das redes sociais, em breve você será um especialista neste universo dinâmico."
    },
    {
        pergunta: "Pergunta 10: Esta rede social é famosa por seus vídeos curtos e criativos, muitas vezes acompanhados de músicas. Qual é?",
        opcoes: ["img/WhatsApp.png", "img/Twitter.png", "img/LinkedIn.png", "img/TikTok.png"],
        resposta: "img/TikTok.png",
        mensagemCorreta: "Incrível! Você acertou em cheio identificando o logo do TikTok, a plataforma líder em vídeos curtos e criativos. Seu conhecimento é notável!",
        mensagemIncorreta: "Sem problemas! Cada tentativa é uma chance de aprender. Continue explorando os logos das redes sociais, em breve você será um especialista neste universo dinâmico."
    }    
];

let indicePerguntaAtual = 0;
let acertos = 0;
let erros = 0;

function exibirPergunta() {
    const perguntaAtual = perguntas[indicePerguntaAtual];

    document.querySelector('.question').textContent = perguntaAtual.pergunta;

    const optionsContainer = document.querySelector('.options-container');
    optionsContainer.innerHTML = "";

    perguntaAtual.opcoes.forEach(opcao => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.onclick = () => checkAnswer(opcao);
        
        const optionImg = document.createElement('img');
        optionImg.src = opcao;
        optionImg.alt = "Opção";

        optionDiv.appendChild(optionImg);
        optionsContainer.appendChild(optionDiv);
    });
}

function checkAnswer(opcaoEscolhida) {
    const perguntaAtual = perguntas[indicePerguntaAtual];

    if (opcaoEscolhida === perguntaAtual.resposta) {
        Swal.fire({
            title: 'Parabéns!',
            text: perguntaAtual.mensagemCorreta,
            icon: 'success',
            confirmButtonText: 'Próxima Pergunta'
        });
        acertos++;
    } else {
        Swal.fire({
            title: 'Ops!',
            text: perguntaAtual.mensagemIncorreta,
            icon: 'error',
            confirmButtonText: 'Ok'
        });
        erros++;
    }

    indicePerguntaAtual++;

    if (indicePerguntaAtual < perguntas.length) {
        exibirPergunta();
    } else {
        exibirResultado();
    }
}

function exibirResultado() {
    let mensagemResultado = '';

    if (acertos === perguntas.length) {
        mensagemResultado = 'Parabéns! Você acertou todas as perguntas!';
        Swal.fire({
            title: 'Troféu de Campeão!',
            text: mensagemResultado,
            imageUrl: 'img/trofeu.png',  // Substitua 'trofeu.jpg' pelo caminho da sua imagem de troféu
            imageAlt: 'Troféu de Campeão',
            confirmButtonText: 'Desbloquear o Prêmio',
            showCancelButton: true,
            cancelButtonText: 'Reiniciar',
            imageWidth: 50,  // Defina a largura desejada da imagem
            imageHeight: 50  // Defina a altura desejada da imagem
        }).then((result) => {
            if (result.isConfirmed) {
                redirecionarProximaFase();
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                reiniciarQuiz();
            }
        });
    } else {
        mensagemResultado = `Você acertou ${acertos} de ${perguntas.length} perguntas. Tente novamente!`;
        Swal.fire({
            title: 'Ops!',
            text: mensagemResultado,
            icon: 'error',
            showCancelButton: true,
            cancelButtonText: 'Reiniciar',
            confirmButtonText: 'Ver Respostas'
        }).then((result) => {
            if (result.isConfirmed) {
                exibirRelatorio();
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                reiniciarQuiz();
            }
        });
    }
}

function redirecionarProximaFase() {
    // Substitua 'proxima-fase.html' pelo caminho da próxima fase
    window.location.href = 'premios/index.html';
}

function exibirRelatorio() {
    Swal.fire({
        title: 'Relatório de Desempenho',
        html: `<p>Acertos: ${acertos}</p><p>Erros: ${erros}</p>`,
        icon: 'info',
        confirmButtonText: 'OK'
    }).then((result) => {
        if (result.isConfirmed) {
            reiniciarQuiz();
        }
    });
}

function reiniciarQuiz() {
    indicePerguntaAtual = 0;
    acertos = 0;
    erros = 0;
    exibirPergunta();
}

// Iniciar o quiz exibindo a primeira pergunta
exibirPergunta();