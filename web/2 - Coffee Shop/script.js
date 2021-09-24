var span = document.getElementById("date");
var date = new Date();
span.innerHTML = date.getFullYear()

const hamburguer = document.getElementById("menu-hamburguer");
const nav = document.getElementById("nav");
const close = document.getElementById("close");
const menu = document.getElementById("menu");

hamburguer.addEventListener('click', () => {
    nav.classList.toggle('show');
    close.classList.toggle('change');
    menu.classList.toggle('change');
})