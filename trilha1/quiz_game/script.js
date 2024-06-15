const questions = [
    { 
        question: "Analisar a imagem apresentada no Visor Cartesiano Interativo abaixo, para identificar a posição relativa, em termos de par ordenado (x,y), ocupada pelo personagem Mario Bros.", 
        answer: "(2,2)",
        image: "img/tema 1 - projeto.png",
    },
    { 
        question: "Analisar a imagem apresentada no Visor Cartesiano Interativo abaixo, para identificar a posição relativa, em termos de par ordenado (x,y), ocupada pela personagem Princess Peach.",
        answer: "(-4,1)",
        image: "img/tema 1 - projeto.png",
    },        
    { question: "Analisar a imagem apresentada no Visor Cartesiano Interativo abaixo, para identificar a posição relativa, em termos de par ordenado (x,y), ocupada pelo personagem Luigi.",
      answer: "(-4,4)" ,
      image: "img/tema 1 - projeto.png",
    },
    { question: "Analisar a imagem apresentada no Visor Cartesiano Interativo abaixo, para identificar a posição relativa, em termos de par ordenado (x,y), ocupada pelo personagem Yoshi.",
      answer: "(4,4)" ,
      image: "img/tema 1 - projeto.png",
    },
    { question: "Analisar a imagem apresentada no Visor Cartesiano Interativo abaixo, para identificar a posição relativa, em termos de par ordenado (x,y), ocupada pelo personagem Toad.",
      answer: "(3,-3)" ,
      image: "img/tema 1 - projeto.png",
    },
    { question: "Analisar a imagem apresentada no Visor Cartesiano Interativo abaixo, para identificar a posição relativa, em termos de par ordenado (x,y), ocupada pelo personagem Bowser, conhecido no Japão como Koopa.",
      answer: "(-2,-4)" ,
      image: "img/tema 1 - projeto.png",
    },
];

let currentQuestion = 0;
let correctAnswers = 0;
const questionText = document.getElementById("question-text");
const answerInput = document.getElementById("answer-input");
const submitButton = document.getElementById("submit-button");
const historyButton = document.getElementById("history-button");
const restartButton = document.getElementById("restart-button");


function displayQuestion() {
    if (currentQuestion < questions.length) {
        questionText.textContent = questions[currentQuestion].question;
    } else {
        showResults();
    }
}

function showResults() {
    // Oculta o contêiner de perguntas
    document.getElementById("question-container").style.display = "none";

    // Calcula o total de acertos
    const totalCorrectAnswers = correctAnswers;

    // Exibe o botão para ver o histórico de respostas
    historyButton.style.display = "block";

    // Exibe o botão para reiniciar o quiz (não importa se todas as respostas estão corretas ou não)
    restartButton.style.display = "block";

    // Adicione um ouvinte de evento ao botão "Reiniciar o Quiz"
    restartButton.addEventListener("click", () => {
        // Redefina todas as variáveis e elementos relevantes para o estado inicial do quiz
        currentQuestion = 0;
        correctAnswers = 0;
        displayQuestion();
        
        // Recarregue a página
        location.reload();
    });

    // Exibe o histórico de respostas no contêiner com animação
    const historyContainer = document.getElementById("history-container");
    historyContainer.style.display = "block";

    // Adiciona a classe de animação ao histórico de respostas
    historyContainer.classList.add("animate__animated", "animate__fadeInUp");

    // Exibe o total de acertos no relatório final
    const totalCorrectElement = document.getElementById("total-correct");
    totalCorrectElement.innerHTML = `<strong>Total de Acertos:</strong> ${totalCorrectAnswers}`;
    totalCorrectElement.classList.add("animate__animated", "animate__fadeInUp"); // Adiciona animação ao total de acertos

// Exibe a data atual
const currentDate = new Date();
const dateElement = document.getElementById("date");
dateElement.textContent = currentDate.toLocaleDateString();

// Exibe o horário atual
const currentTime = currentDate.toLocaleTimeString();
const timeElement = document.getElementById("time");
timeElement.textContent = currentTime;

    // Exibe o histórico de respostas no contêiner com animação
    const historyDisplay = document.getElementById("history-display");
    historyDisplay.style.display = "block";

    // Atualiza o conteúdo do histórico de respostas
    const historyContent = document.getElementById("history-content");
    historyContent.innerHTML = generateHistory();

    // Lógica para mostrar a imagem do troféu e a mensagem apenas quando todas as respostas estiverem corretas
    if (totalCorrectAnswers === questions.length) {
        const trophyImage = document.getElementById("trophy-image");
        trophyImage.classList.remove("hidden"); // Remove a classe "hidden" para exibir a imagem do troféu

        const trophyMessage = document.getElementById("trophy-message");
        trophyMessage.classList.remove("hidden"); // Remove a classe "hidden" para exibir a mensagem "Você venceu!"

        const dateTimeElement = document.getElementById("date-time");
        const now = new Date();
        const dateTimeString = `Data: ${now.toLocaleDateString()} Horário: ${now.toLocaleTimeString()}`;
        dateTimeElement.textContent = dateTimeString;
        dateTimeElement.classList.remove("hidden"); // Remove a classe "hidden" para exibir a data e o horário
    } else {
        const trophyImage = document.getElementById("trophy-image");
        trophyImage.classList.add("hidden"); // Adicione a classe "hidden" para ocultar a imagem do troféu (caso não seja acertado tudo)

        const trophyMessage = document.getElementById("trophy-message");
        trophyMessage.classList.add("hidden"); // Adicione a classe "hidden" para ocultar a mensagem (caso não seja acertado tudo)

        const dateTimeElement = document.getElementById("date-time");
        dateTimeElement.classList.add("hidden"); // Adicione a classe "hidden" para ocultar a data e o horário (caso não seja acertado tudo)

        nextPhaseButton.style.display = "none"; // Oculta o botão "Próxima Fase" (caso não seja acertado tudo)
    }

    // Define a variável nextPhaseButton
    const nextPhaseButton = document.getElementById("next-phase-button");

    // Lógica para mostrar o botão "Próxima Fase" apenas quando todas as respostas estiverem corretas
    if (totalCorrectAnswers === questions.length) {
        nextPhaseButton.style.display = "block"; // Torna o botão visível
    } else {
        nextPhaseButton.style.display = "none"; // Oculta o botão (caso não seja acertado tudo)
    }

    // Adicione um ouvinte de evento de clique ao botão
    nextPhaseButton.addEventListener("click", () => {
        // Exibe uma mensagem usando o SweetAlert2
        Swal.fire({
            title: 'Próxima Fase',
            text: 'Parabéns! Você acertou todas as respostas e pode avançar para a próxima fase.',
            icon: 'success',
            confirmButtonText: 'Fechar',
            onClose: () => {
                // Redireciona para a próxima página (substitua 'proxima_pagina.html' pelo URL da próxima página)
                window.location.href = 'https://rscacademy.com.br/';
            }
        });
    }); 
}

// ... Seu código posterior ...

function generateHistory() {
    let history = "<h2>Respostas do Estudante</h2>";
    for (let i = 0; i < questions.length; i++) {
        const question = questions[i].question;
        const answer = questions[i].answer;
        const userAnswer = questions[i].userAnswer; // Adicione esta linha para obter a resposta do aluno
        history += `<p>${question}:<br><br><b>Resposta do Aluno</b> - ${userAnswer}<br><b>Resposta Correta</b> - ${answer}</p>`;
    }
    return history;
}

submitButton.addEventListener("click", () => {
    const userAnswer = answerInput.value.trim();
    const correctAnswer = questions[currentQuestion].answer;

    questions[currentQuestion].userAnswer = userAnswer; // Armazena a resposta do aluno na estrutura de dados

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        Swal.fire("Resposta Certa!", "Parabéns!", "success");
        correctAnswers++;
    } else {
        Swal.fire("Resposta Errada!", `A resposta correta era: ${correctAnswer}`, "error");
    }

    currentQuestion++;
    answerInput.value = "";
    displayQuestion();
});

historyButton.addEventListener("click", () => {
    Swal.fire({
        title: "Histórico de Respostas",
        html: generateHistory(),
        icon: "info",
    });
});

function displayQuestion() {
    if (currentQuestion < questions.length) {
        questionText.textContent = questions[currentQuestion].question;
        
        // Define a origem da imagem e a exibe
        const questionImage = document.getElementById("question-image");
        questionImage.src = questions[currentQuestion].image;
        questionImage.style.display = "block";
    } else {
        showResults();
    }
}

function updateDateTime() {
    const currentDateTime = new Date();
    const formattedDateTime = currentDateTime.toLocaleString(); // Formata a data e hora como uma string legível

    const dateTimeElement = document.getElementById("current-date-time");
    dateTimeElement.textContent = formattedDateTime;
}

// Chama a função para atualizar a data e o horário a cada segundo (1000 milissegundos)
setInterval(updateDateTime, 1000);

// Chama a função uma vez para exibir a data e o horário inicial
updateDateTime();


displayQuestion();