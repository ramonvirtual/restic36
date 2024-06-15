// script.js
document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll("#menu li");

    menuItems.forEach((item) => {
        item.addEventListener("click", function () {
            menuItems.forEach((item) => {
                item.querySelector("a").classList.remove("active");
            });

            this.querySelector("a").classList.add("active");
        });
    });
});

// script.js
const menuItems = document.querySelectorAll(".menu a");

menuItems.forEach((menuItem) => {
    const icon = menuItem.querySelector("i");
    const text = menuItem.querySelector("span");

    // Adicione classes CSS para estilização criativa
    icon.classList.add("menu-icon");
    text.classList.add("menu-text");

    // Evento de mouseover para animação
    menuItem.addEventListener("mouseover", () => {
        icon.classList.add("animated");
        text.classList.add("animated");
    });

    // Evento de mouseout para remover a animação
    menuItem.addEventListener("mouseout", () => {
        icon.classList.remove("animated");
        text.classList.remove("animated");
    });
});

 // Função para adicionar animação de rotação aos ícones das redes sociais
 const socialIcons = document.querySelectorAll('.social-icons a');

 socialIcons.forEach(icon => {
     icon.addEventListener('mouseover', () => {
         icon.style.transform = 'rotate(360deg)';
         icon.style.transition = 'transform 0.5s';
     });

     icon.addEventListener('mouseout', () => {
         icon.style.transform = 'rotate(0deg)';
         icon.style.transition = 'transform 0.5s';
     });
 });