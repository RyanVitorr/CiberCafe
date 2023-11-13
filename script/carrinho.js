/* global */
const containerEscolherMesas = document.querySelector(".mesas-card");
const divAddCardCarrinho = document.querySelector("#conteudo-item-carrinho");

/* conteudo da mesa de grupo*/

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
           `<div class="mesas" id="${itensMesas.idMesa}" onclick="addMesaEscolhidaGrupo()">
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


// ao clicar na mesa de grupo que deseja do 

const escolheuMesaGrupo = `
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


function addMesaEscolhidaGrupo() {
    divAddCardCarrinho.innerHTML = escolheuMesaGrupo;
}



/* conteudo mesa solo */
const bntMesaSolo = document.querySelector("#mesa-solo");

const listaMesasSolo = [
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
    },
    {
        idMesa: "5",
        iconeMesa: "fa-solid fa-computer",
        imgMesa: "fe",
    },

];

function escolhaMesaSolo () {
    for (const itensMesas of listaMesasSolo) {
        const mesas = 
           `<div class="mesas" id="${itensMesas.idMesa}" onclick="addMesaEscolhidaSolo()">
                <i class="${itensMesas.iconeMesa}"></i>
            </div>`;
    
        containerEscolherMesas.innerHTML += mesas;
    };    
};

bntMesaSolo.addEventListener("click", () => {
    if (sectionAluguel.style.display == "") {
        sectionAluguel.style.display = "flex";
    }
    escolhaMesaSolo()
});

// ao clicar na mesa solo que deseja

const escolheuMesaSolo = `
                        <div class="card-item-carrinho">
                            <div class="img-item-carrinho">
                                <img src="#" alt="">
                            </div>

                            <div class="infos-item-carrinho">
                                <div class="nome-item-carrinho">
                                    <span>Mesa Solo 1</span>
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

                
function addMesaEscolhidaSolo() {
    divAddCardCarrinho.innerHTML = escolheuMesaSolo;
};
                        

// ao clicar no botão de excluir item do carrinho 

function excluirItemCarrinho(event) {
    event.target.parentElement.parentElement.parentElement.parentElement.remove();
};