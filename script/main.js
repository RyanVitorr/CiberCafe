// menu burguer
const menu = document.querySelector("#menu-burguer");
const navBar = document.querySelector("#navbarNav");

menu.addEventListener("click", () => {
    navBar.classList.toggle("mostrar");
});




// saber mais

const mostrarLoung = document.querySelector("#lounge");
const bntSaberMais = document.querySelector("#saberMais");

bntSaberMais.addEventListener("click", () => {
    mostrarLoung.classList.toggle("mostrar")
});
