function mostrarPremio() {
    // Lista de todas as possíveis premiações e mensagens motivacionais
    const premiacoes = [
        'Parabéns! Você ganhou um Chocolate!',
        'Parabéns! Você ganhou um Chocolate!',
        'Parabéns! Você ganhou um Chocolate!',
        '<b>Você ganhou uma dica para potencializar seu negócio no Marketing Digital:</b>\n"A persistência é o caminho do êxito." - Charles Chaplin',
        '<b>Você ganhou uma dica para potencializar seu negócio no Marketing Digital:</b>\n"O sucesso normalmente vem para quem está ocupado demais para procurar por ele." - Henry David Thoreau',
        '<b>Você ganhou uma dica para potencializar seu negócio no Marketing Digital:</b>\n"O único lugar onde o sucesso vem antes do trabalho é no dicionário." - Albert Einstein',
        '<b>Você ganhou um Chocolate e uma dica para potencializar seu negócio no Marketing Digital:</b>\n"Não é o mais forte que sobrevive, nem o mais inteligente. Quem sobrevive é o mais disposto à mudança." - Charles Darwin',
        '<b>Você ganhou uma dica para potencializar seu negócio no Marketing Digital:</b>\n"O empreendedor de sucesso é aquele que é capaz de ver uma oportunidade no meio de uma dificuldade." - Thomas Edison',
        '<b>Você ganhou uma dica para potencializar seu negócio no Marketing Digital:</b>\n"O segredo do sucesso é a constância do propósito." - Benjamin Disraeli'
    ];

    // Escolhe aleatoriamente uma premiação ou mensagem motivacional
    const indicePremiacao = Math.floor(Math.random() * premiacoes.length);
    const mensagemPremio = premiacoes[indicePremiacao];

    // Define o ícone com base no tipo de mensagem
    let icon = 'success';
    if (mensagemPremio.startsWith('<b>Você ganhou uma dica para potencializar seu negócio no Marketing Digital:</b>')) {
        icon = 'info';
    }

    Swal.fire({
        title: mensagemPremio,
        icon: icon,
        confirmButtonText: 'Ok',
        showCloseButton: true,
        closeButtonAriaLabel: 'Fechar',
    }).then(() => {
        // Aqui você pode adicionar a lógica para reiniciar o quiz ou redirecionar para a próxima fase
        // Por exemplo:
        // reiniciarQuiz();
    });
}

function reiniciarQuiz() {
    console.log("Reiniciando o quiz...Prêmio");
    // Substitua 'quiz.html' pelo caminho da página inicial do quiz
    window.location.href = 'projetorsc/index.html';
}
