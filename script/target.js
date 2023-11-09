
// reserve seu pc
const bntReserveSeuPc = document.querySelector("#bntInfos");
const cardsTiposPc = document.querySelector("#cards-tipos-pcs")

bntReserveSeuPc.addEventListener("click", () => {
    cardsTiposPc.classList.toggle("ativo");
});
