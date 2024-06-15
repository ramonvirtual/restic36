document.addEventListener("DOMContentLoaded", function () {
    const iniciarQuizBtn = document.getElementById("iniciarQuiz");
    const gameContainer = document.getElementById("gameContainer");
    const gameIframe = document.getElementById("gameIframe");
    const responderPerguntasBtn = document.getElementById("responderPerguntas");
    const converseIABtn = document.getElementById("converseIA");
    const irParaChatbotBtn = document.getElementById("irParaChatbot");

    iniciarQuizBtn.addEventListener("click", function () {
        iniciarQuizBtn.style.display = "none";
        gameContainer.style.display = "block";
        gameIframe.src = "https://wordwall.net/pt/embed/b50c4ce9718843c7ba643c6b9e0d39e8?themeId=52&templateId=22&fontStackId=0";
        responderPerguntasBtn.style.display = "block";
        converseIABtn.style.display = "block"; // Mostra o botão "Conheça os Personagens"
        irParaChatbotBtn.style.display = "block"; // Mostra o botão "Ir para o Chatbot"
    });

    responderPerguntasBtn.addEventListener("click", function () {
        // Redireciona para outra página HTML após clicar no botão "Responder às Perguntas"
        Swal.fire({
            title: 'Próxima Etapa',
            text: 'Clique em OK para continuar.',
            icon: 'info',
            confirmButtonText: 'OK'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = 'quiz_game/quiz_personagens.html'; // Substitua pelo seu URL real
            }
        });
    });

    converseIABtn.addEventListener("click", function () {
        // Exibe uma mensagem ao clicar no botão "Conheça os Personagens"
        Swal.fire({
            title: 'Conheça os Personagens',
            text: 'Inicie uma conversa com a IA aqui.',
            icon: 'info',
            confirmButtonText: 'OK'
        }).then((result) => {
            if (result.isConfirmed) {
                // Redireciona para outra página HTML após clicar em OK
                window.location.href = 'personagens/index.html'; // Substitua pelo seu URL real
            }
        });
    });

    irParaChatbotBtn.addEventListener("click", function () {
        // Redireciona para outra página HTML após clicar no botão "Ir para o Chatbot"
        Swal.fire({
            title: 'Ir para o Chatbot',
            text: 'Clique em OK para acessar o Chatbot.',
            icon: 'info',
            confirmButtonText: 'OK'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = 'chatbot/index.html'; // Substitua pelo seu URL real
            }
        });
    });
});
