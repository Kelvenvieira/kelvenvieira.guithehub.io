var menuButton = document.getElementById("menu-button");
var menu = document.getElementById("menu");

menuButton.addEventListener("click", function() {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  } 
});

const menuToggle = document.getElementById('menu-toggle');


const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});
const imagem = document.getElementById('imagem');

imagem.addEventListener('mouseenter', () => {
    imagem.style.transform = 'scale(1.2)'; 
});

imagem.addEventListener('mouseleave', () => {
    imagem.style.transform = 'scale(1)'; 
});
