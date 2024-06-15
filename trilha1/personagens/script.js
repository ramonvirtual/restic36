document.querySelectorAll('.character').forEach(character => {
    character.addEventListener('click', () => {
        const characterId = character.id;
        const descriptions = {
            character1: "O encanador aventureiro e principal protagonista do jogo.",
            character2: "O irmão de Mario, conhecido por sua altura e salto impressionante.",
            character3: "Um dinossauro amigo de Mario que pode comer inimigos e voar.",
            character4: "Um habitante do Reino dos Cogumelos e aliado de Mario.",
            character5: "A princesa do Reino dos Cogumelos, frequentemente capturada por Bowser.",
            character6: "O principal vilão, líder dos Koopas e arqui-inimigo de Mario."
        };

        Swal.fire({
            title: character.querySelector('.name-box').textContent,
            text: descriptions[characterId],
            icon: 'info',
            confirmButtonText: 'Fechar'
        });
    });
});

// Função para mostrar a confirmação com SweetAlert2
function showConfirmation() {
    Swal.fire({
        title: 'Tem certeza?',
        text: 'Você deseja voltar para a página anterior?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sim, voltar!',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            // Se o usuário confirmar, execute o redirecionamento
            redirectToPreviousPage();
        }
    });
}

// Função para redirecionar para a página anterior
function redirectToPreviousPage() {
    // Redirecionamento para a página anterior (mude a URL conforme necessário)
    window.location.href = '/gpemac3/index.html';
}
