// principais --------------------------------------------------------------------------
const containerEscolherMesas = document.querySelector(".mesas-card");
const divAddCardCarrinho = document.querySelector("#conteudo-item-carrinho");
const sectionAluguel = document.querySelector("#aluguel");

// ao clicar na mesa de grupo ----------------------------------------------------------
const bntMesaGrupo = document.querySelector("#mesa-grupo");
bntMesaGrupo.addEventListener("click", () => {
    if (sectionAluguel.style.display == "") {
        sectionAluguel.style.display = "flex";
    }
    escolhaMesaGrupo()
    pegarValorAluguel()
});


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
    // apaga o item que  tiver no carrinho
    const cardItemCarrinho = document.querySelectorAll(".card-item-carrinho");
    cardItemCarrinho.forEach((cardItemCarrinho) => {cardItemCarrinho.remove();});
    valorTotal = 0
 
    // apaga as opções de mesas
    const mesa = document.querySelectorAll(".mesas")
    mesa.forEach((mesa) => {mesa.remove();});
    
    // gera as opções de mesas
    for (const itensMesas of listaMesasDeGrupo) {
        var mesas = 
           `<div class="mesas" id="${itensMesas.idMesa}" onclick="addMesaEscolhidaGrupo()">
                <i class="${itensMesas.iconeMesa}"></i>
            </div>`;
    
        containerEscolherMesas.innerHTML += mesas;
    };    
};



// ao clicar na mesa de grupo que deseja 
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
                                        <input class="input-aluguel" type="number" value="1" max="10" min="1" onclick="atualizarTotal()">  
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


// ao clicar na mesa solo --------------------------------------------------------------

const bntMesaSolo = document.querySelector("#mesa-solo");
bntMesaSolo.addEventListener("click", () => {
    if (sectionAluguel.style.display == "") {
        sectionAluguel.style.display = "flex";
    }
    escolhaMesaSolo()
    pegarValorAluguel()
});

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
    // apaga o item que  tiver no carrinho
    const cardItemCarrinho = document.querySelectorAll(".card-item-carrinho");
    cardItemCarrinho.forEach((cardItemCarrinho) => {cardItemCarrinho.remove();});
    valorTotal = 0
    
    // apaga as opções de mesas
    const mesa = document.querySelectorAll(".mesas")
    mesa.forEach((mesa) => {mesa.remove();});
    
    // gera as opções de mesas
    for (const itensMesas of listaMesasSolo) {
        var mesas = 
           `<div class="mesas" id="${itensMesas.idMesa}" onclick="addMesaEscolhidaSolo()">
                <i class="${itensMesas.iconeMesa}"></i>
            </div>`;
        
        
        containerEscolherMesas.innerHTML += mesas;

    };    


};

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
                                        <input class="input-aluguel" type="number" value="1" max="10" min="1" onclick="atualizarTotal()">                                      
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
                   

// ao clicar no neuro dance ------------------------------------------------------------

const bntNeuroDance = document.querySelector("#neuro-dance");
bntNeuroDance.addEventListener("click", () => {
    if (sectionAluguel.style.display == "") {
        sectionAluguel.style.display = "flex";
    }
    escolhaNeuroDance()
    pegarValorAluguel()
});

const listaCabineNeuroDance = [
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
];

function escolhaNeuroDance () {
    // apaga o item que  tiver no carrinho
    const cardItemCarrinho = document.querySelectorAll(".card-item-carrinho");
    cardItemCarrinho.forEach((cardItemCarrinho) => {ccardItemCarrinho.remove();});
    valorTotal = 0
    
    // apaga as opções de mesas
    const mesa = document.querySelectorAll(".mesas")
    mesa.forEach((mesa) => {mesa.remove();});
    
    // gera as opções de mesas
    for (const itensNeuro of listaCabineNeuroDance) {
        var mesas = 
           `<div class="mesas" id="${itensNeuro.idMesa}" onclick="addNeuroDanceEscolhido()">
                <i class="${itensNeuro.iconeMesa}"></i>
            </div>`;
        containerEscolherMesas.innerHTML += mesas;

    };    
};


// ao clicar no neuro dance que deseja 

const escolheuNeuroDance = `
                        <div class="card-item-carrinho">
                            <div class="img-item-carrinho">
                                <img src="#" alt="">
                            </div>

                            <div class="infos-item-carrinho">
                                <div class="nome-item-carrinho">
                                    <span>Neuro Dance</span>
                                </div>

                                <div class="div-preco-mesa">
                                   <span>Preço: </span> 
                                   <span class="valor-preco">R$250,00</span>
                                </div>

                                <div class="bnt-carrinho">
                                    <div class="bnt-pri">       
                                        <input class="input-aluguel" type="number" value="1" max="10" min="1" onclick="atualizarTotal()">                                      
                                    </div>

                                    <div class="bnt-seg">
                                        <button class="bnt-excluir" onclick="excluirItemCarrinho(event)"></button>
                                    </div>
                                </div>
                            </div>
                        </div>`;

function addNeuroDanceEscolhido() {
    valorTotal = 0
    divAddCardCarrinho.innerHTML = escolheuNeuroDance;
    pegarValorAluguel()
};
                            

// pegar valor aluguel ---------------------------------------------------------------
const cardItemMesa = document.getElementsByClassName("card-item-carrinho");
let valorTotal = "0,00";

function pegarValorAluguel() {
    for(var i=0; i < cardItemMesa.length; i++) {
        const precoAluguel = cardItemMesa[i].getElementsByClassName("valor-preco")[0].innerText.replace("R$", "").replace(",", ".");
        const qtdHorasAlugadas = cardItemMesa[i].getElementsByClassName("input-aluguel")[0].value;
        valorTotal += precoAluguel * qtdHorasAlugadas;
    };

    valorTotal = valorTotal.toFixed(2);
    valorTotal = valorTotal.replace(".", ",");
    document.querySelector("#valor-a-pagar").innerText = "R$" + valorTotal ;
};


function atualizarTotal() {
    valorTotal = 0;
    pegarValorAluguel()
}

// mudar valor total no carrinho



// ao clicar no botão de excluir item do carrinho --------------------------------------
function excluirItemCarrinho(event) {
    event.target.parentElement.parentElement.parentElement.parentElement.remove();
    valorTotal = 0;
    pegarValorAluguel()
};


// bnt comprar ------------------------------------------------------------------------
const bntComprar = document.querySelector("#comprar");
const mostrarPagamento = document.querySelector("#pagamento");


function comprar() {
    if (valorTotal == "0,00") {
        alert("Seu carrinho está vazio!")
    } else {
        mostrarPagamento.classList.toggle("ativo");
    }
}

// ao clicar em cancelar --------------------------------------------------------------

function cancelar() {

    const cardItemCarrinho = document.querySelectorAll(".card-item-carrinho");
    cardItemCarrinho.forEach((cardItemCarrinho) => {cardItemCarrinho.remove();});
    
    valorTotal = 0
    pegarValorAluguel()

    const mesa = document.querySelectorAll(".mesas")
    mesa.forEach((mesa) => {mesa.remove();});

    if (sectionAluguel.style.display == "flex") {
        sectionAluguel.style.display = "";
    }
};


// ao clicar em cartão -----------------------------------------------------------
const conteudoCartao = document.querySelector("#conteudo-cartao");
const cartao = document.querySelector("#cartao");

cartao.addEventListener("click", () => {
    conteudoCartao.classList.toggle("ativo");
});