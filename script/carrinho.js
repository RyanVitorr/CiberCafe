
/* conteudo da mesa de grupo*/

const containerEscolherMesas = document.querySelector(".mesas-card");
const bntMesaGrupo = document.querySelector("#mesa-grupo");
const sectionAluguel = document.querySelector("#aluguel");



const listaMesasDeGrupo = [
    {
        idMesa: "1",
        iconeMesa: "fa-solid fa-computer",
        imgMesa: "fe",
    },
    {
        idMesa: "2",
        iconeMesa: "fa-solid fa-computer",
        imgMesa: "fe",
    },
    {
        idMesa: "3",
        iconeMesa: "fa-solid fa-computer",
        imgMesa: "fe",
    },
    {
        idMesa: "4",
        iconeMesa: "fa-solid fa-computer",
        imgMesa: "fe",
    }
];

function escolhaMesaGrupo () {
    for (const itensMesas of listaMesasDeGrupo) {
        const mesas = 
           `<div class="mesas" id="${itensMesas.idMesa}" onclick="addMesaEscolhida()">
                <i class="${itensMesas.iconeMesa}"></i>
            </div>`;
    
        containerEscolherMesas.innerHTML += mesas;
    };    
};

bntMesaGrupo.addEventListener("click", () => {
    if (sectionAluguel.style.display == "") {
        sectionAluguel.style.display = "flex";
    }
    escolhaMesaGrupo()
});

// ao clicar na mesa que deseja 
const divAddCardCarrinho = document.querySelector("#conteudo-item-carrinho");
const escolheuMesa = `
                        <div class="card-item-carrinho">
                            <div class="img-item-carrinho">
                                <img src="#" alt="">
                            </div>

                            <div class="infos-item-carrinho">
                                <div class="nome-item-carrinho">
                                    <span>Mesa de Grupo 1</span>
                                </div>

                                <div class="bnt-carrinho">
                                    <div class="bnt-pri">
                                        <button class="bnt-item-carrinho"></button>
                                        <div class="numero-hors-item-carrinho"><p>1</p></div>
                                        <button class="bnt-item-carrinho"></button>
                                    </div>

                                    <div class="bnt-seg">
                                        <button class="bnt-excluir" onclick="excluirItemCarrinho(event)"></button>
                                    </div>
                                </div>
                            </div>
                        </div>`;
var i = 0;

function addMesaEscolhida() {
    divAddCardCarrinho.innerHTML = escolheuMesa;
    i = 1;
    console.log(i);
}


// ao clicar no botão de excluir item do carrinho 

function excluirItemCarrinho(event) {
    event.target.parentElement.parentElement.parentElement.parentElement.remove();
};