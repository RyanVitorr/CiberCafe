
const menu = document.getElementById('menu');
const barraMenu = document.querySelectorAll('.barraMenu');
const nav = document.getElementById('navegation');
const linkNav = document.querySelectorAll('.linkNav');
const body = document.getElementById('body');

menu.addEventListener("click", () => {
    nav.classList.toggle('ativo');
    body.classList.toggle('ativo');
    menu.classList.toggle('ativo');
    
    console.log("clicou no menu");
});

linkNav.forEach((linkNav) => {
    linkNav.addEventListener('click', () => {
        nav.classList.toggle('ativo');
        body.classList.toggle('ativo');
        menu.classList.toggle('ativo');
        console.log('clicou no link')
    });
});
