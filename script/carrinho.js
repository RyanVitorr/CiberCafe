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
        var mesas = 
           `<div class="mesas" id="${itensMesas.idMesa}" onclick="addMesaEscolhidaGrupo()">
                <i class="${itensMesas.iconeMesa}"></i>
            </div>`;
    
        containerEscolherMesas.innerHTML += mesas;
    };    
    
   
};

// adicionar html escolha mesa  

const htmlMesaEscolha =`<div id="selecionar-mesa">
                            <div id="titulo-e-container">
                                <div class="titulo-pagamento">
                                    <h4>Escolha sua mesa</h4>
                                </div>
    
                                <div id="conteudo-selecionar-mesa">
                                    <div class="mesas-card">
            
                                    </div>
                                /div>
                            </div>

                            <div id="carrinho">
                                <div id="titulo-carrinho">
                                    <div id="conteudo-titulo-carrinho">
                                        <h4>Seu Carrinho</h4>
                                    </div>
                                </div>

                                <div id="item-carrinho">
                                    <div id="conteudo-item-carrinho"></div>
                                </div>

                                <div id="finalizar-compra">
                                    <div id="preco-compra">
                                        <div id="conteudo-preco-compra">
                                            <div class="div-conteudo-preeco-compra">
                                                <span>Total:</span>
                                            </div>
                                            <div class="div-conteudo-preeco-compra">
                                            <p id="valor-a-pagar">100,00$R</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="conteudo-finalizar-compra">
                                        <div class="comprar-cancelar"><span>Comprar</span></div>
                                        <div class="comprar-cancelar"><span>Cancelar</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>`

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
                                    <span>Mesa de Grupo</span>
                                </div>
                               
                                <div class="div-preco-mesa">
                                   <span>Preço: </span> 
                                   <span class="valor-preco">R$6,00</span>
                                </div>
                                
                                <div class="bnt-carrinho">
                                    <div class="bnt-pri">
                                        <input class="input-aluguel" type="number" value="1" max="10" onclick="atualizarTotal()">  
                                    </div>

                                    <div class="bnt-seg">
                                        <button class="bnt-excluir" onclick="excluirItemCarrinho(event)"></button>
                                    </div>
                                </div>
                            </div>
                        </div>`;


function addMesaEscolhidaGrupo() {
    valorTotal = 0
    divAddCardCarrinho.innerHTML = escolheuMesaGrupo;
    pegarValorAluguel()
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
        var mesas = 
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
                                    <span>Mesa Solo</span>
                                </div>

                                <div class="div-preco-mesa">
                                   <span>Preço: </span> 
                                   <span class="valor-preco">R$2,00</span>
                                </div>

                                <div class="bnt-carrinho">
                                    <div class="bnt-pri">       
                                        <input class="input-aluguel" type="number" value="1" max="10" onclick="atualizarTotal()">                                      
                                    </div>

                                    <div class="bnt-seg">
                                        <button class="bnt-excluir" onclick="excluirItemCarrinho(event)"></button>
                                    </div>
                                </div>
                            </div>
                        </div>`;

                
function addMesaEscolhidaSolo() {
    valorTotal = 0
    divAddCardCarrinho.innerHTML = escolheuMesaSolo;
    pegarValorAluguel()
};
                   



// pegar valor aluguel 
const cardItemMesa = document.getElementsByClassName("card-item-carrinho");
let valorTotal = 0;

function pegarValorAluguel() {
    for(var i=0; i < cardItemMesa.length; i++) {
        console.log(cardItemMesa[i]);
        const precoAluguel = cardItemMesa[i].getElementsByClassName("valor-preco")[0].innerText.replace("R$", "").replace(",", ".");
        console.log(precoAluguel);
        const qtdHorasAlugadas = cardItemMesa[i].getElementsByClassName("input-aluguel")[0].value;
        console.log(qtdHorasAlugadas);


        valorTotal += precoAluguel * qtdHorasAlugadas;
    };
    console.log(valorTotal)
};

function atualizarTotal() {
    valorTotal = 0;
    pegarValorAluguel()
}

// ao clicar no botão de excluir item do carrinho 
function excluirItemCarrinho(event) {
    event.target.parentElement.parentElement.parentElement.parentElement.remove();
    valorTotal = 0;
};