document.addEventListener("DOMContentLoaded", function() {
    const chatMessages = document.getElementById("chat-messages");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");
    const characterImage = document.getElementById("character-image");
    const resetButton = document.querySelector(".reset-button"); // Botão "Reiniciar Chat"

    const characterButtons = document.querySelectorAll(".option-button");
    characterButtons.forEach(button => {
        button.addEventListener("click", function() {
            const characterName = button.textContent;
            userInput.value = characterName;
        });
    });

    sendButton.addEventListener("click", function() {
        const userMessage = userInput.value;
        if (userMessage.trim() === "") return;

        displayUserMessage(userMessage);
        respondToUserMessage(userMessage);

        userInput.value = "";
    });

    resetButton.addEventListener("click", function() {
        // Limpa as mensagens do chat e esconde a imagem do personagem
        chatMessages.innerHTML = "";
        characterImage.style.display = "none";
    });

    function displayUserMessage(message) {
        const userMessageElement = document.createElement("div");
        userMessageElement.classList.add("user-message");
        userMessageElement.textContent = `Você: ${message}`;
        chatMessages.appendChild(userMessageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function displayChatbotMessage(message) {
        const chatbotMessageElement = document.createElement("div");
        chatbotMessageElement.classList.add("chatbot-message");
        chatbotMessageElement.textContent = `Chatbot: ${message}`;
        chatMessages.appendChild(chatbotMessageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function respondToUserMessage(userMessage) {
        const lowercaseUserMessage = userMessage.toLowerCase();
        const characterInfo = {
            Mario: {
                description: "O Mario Bros é um encanador aventureiro e principal protagonista do jogo. Seja bem-vindo a Trilha 1: Troféu de Excelência",
                imageSrc: "img/mario.png" // Adicione o caminho da imagem de Mario
            },
            Luigi: {
                description: "O irmão de Mario Bros, conhecido por sua altura e salto impressionante.",
                imageSrc: "img/luigi.png" // Adicione o caminho da imagem de Luigi
            },
            Yoshi: {
                description: "Um dinossauro amigo de Mario Bros que pode comer inimigos e voar.",
                imageSrc: "img/yoshi.png" // Adicione o caminho da imagem de Yoshi
            },
            Toad: {
                description: "Um habitante do Reino dos Cogumelos e aliado de Mario Bros.",
                imageSrc: "img/toad.png" // Adicione o caminho da imagem de Toad
            },
            'Princess Peach': {
                description: "A princesa do Reino dos Cogumelos, frequentemente capturada por Bowser.",
                imageSrc: "img/princess_peach.png" // Adicione o caminho da imagem de Princess Peach
            },
            Bowser: {
                description: "O principal vilão, líder dos Koopas e arqui-inimigo de Mario Bros.",
                imageSrc: "img/bowser.png" // Adicione o caminho da imagem de Bowser
            }
        };

        const selectedCharacter = Object.keys(characterInfo).find(character =>
            lowercaseUserMessage.includes(character.toLowerCase())
        );

        if (selectedCharacter) {
            const character = characterInfo[selectedCharacter];
            displayCharacterInfo(selectedCharacter, character.description, character.imageSrc);
        } else {
            displayChatbotMessage("Desculpe, não sei muito sobre esse personagem.");
        }
    }

    function displayCharacterInfo(characterName, description, imageSrc) {
        const chatbotMessage = `**${characterName}**: ${description}`;

        characterImage.src = imageSrc;
        characterImage.style.display = "block";
        displayChatbotMessage(chatbotMessage);
    }
});
