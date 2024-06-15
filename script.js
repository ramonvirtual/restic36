// script.js
document.addEventListener("DOMContentLoaded", function() {
    console.log("Educacional RSCVIRTUAL está pronto!");

    const trilhas = document.querySelectorAll('.trilha');
    trilhas.forEach(trilha => {
        trilha.addEventListener('click', () => {
            alert(`Você clicou na ${trilha.querySelector('h2').textContent}`);
        });
    });
});
