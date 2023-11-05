import escolhaMesaSolo from '../script/carrinho.js';
import escolhaMesaGrupo from '../script/carrinho.js';

// reserve seu pc
const bntReserveSeuPc = document.querySelector("#bntInfos");
const cardsTiposPc = document.querySelector("#cards-tipos-pcs")

bntReserveSeuPc.addEventListener("click", () => {
    cardsTiposPc.classList.toggle("ativo");
});


// escolher mesa grupo

const mesaGrupo = document.querySelector("#mesa-grupo");

mesaGrupo.addEventListener("click", mesaGrupo())