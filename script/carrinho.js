
const bnt = document.querySelector("#bntInfos");

/* ativar o cointainer de aluguel*/
bnt.addEventListener("click", () => {
    const aluguel = document.querySelector("#aluguel");
    aluguel.classList.toggle("ativo"); 
});

/* conteudo da mesa de grupo*/

const listaMesasDeGrupo = [
    {
        idMesa: "1",
        iconeMesa: "fa-solid fa-computer"
    },
    {
        idMesa: "2",
        iconeMesa: "fa-solid fa-computer"
    },
    {
        idMesa: "3",
        iconeMesa: "fa-solid fa-computer"
    },
    {
        idMesa: "4",
        iconeMesa: "fa-solid fa-computer"
    },
];

for (const itensMesas of listaMesasDeGrupo) {
    const mesas = 
       `<div class="caixaMesas">
            <i class="${itensMesas.iconeMesa}"></i>
        </div>`;

    document.querySelector("#mesasGrupo").innerHTML += mesas;
};


/* conteudo mesa solo*/

const listaMesasSolo = [
    {
        idMesa: "1",
        iconeMesa: "fa-solid fa-computer"
    },
    {
        idMesa: "2",
        iconeMesa: "fa-solid fa-computer"
    },
    {
        idMesa: "3",
        iconeMesa: "fa-solid fa-computer"
    },
    {
        idMesa: "4",
        iconeMesa: "fa-solid fa-computer"
    },
    {
        idMesa: "5",
        iconeMesa: "fa-solid fa-computer"
    },
    {
        idMesa: "6",
        iconeMesa: "fa-solid fa-computer"
    },
    {
        idMesa: "7",
        iconeMesa: "fa-solid fa-computer"
    },
];

for (const itensMesas of listaMesasSolo) {
    const mesas = 
       `<div class="caixaMEsaSolo">
            <i class="${itensMesas.iconeMesa}"></i> 
        </div>`;

    document.querySelector("#mesasSolo").innerHTML += mesas;
};


/* ao escolher a mesa */ 
const produto = document.querySelector("#produto");
const mesa = document.querySelector("#teste");

mesa.addEventListener("click", () => {
    const addCarrinho =`<div id="containerProduto">
                        <div class="titulo">
                            <h4>Seu carrinho</h4>
                        </div>
                        <div id="containerPcs">
                            <div class="pcsCard">
                                <div class="conteudoCard">
                                    <div class="imgCard">
                                        <img src="#" alt="">
                                    </div>
                                    <div class="textInfos">
                                        <span>Mesa em Grupo 1</span>

                                        <div class="horasAlugadas">
                                            <p>Tempo de aluguel:</p>
                                            <div class="bntAluguel">
                                                <button class="
                                                bntSub"><i class="fa-solid fa-minus"></i></button>

                                                <input type="number" placeholder="Outro" min="1" max="10" value="1">

                                                <button class="
                                                bntAdd"><i class="fa-solid fa-plus"></i></button>
                                                
                                                <button class="bntExcluir"><i class="fa-solid fa-trash"></i></button>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="containerValorPagamento">
                            <div id="conteudoValorPagamento">
                                <span>Total a pagar: </span>
                                <div id="valorTotal">
                                    <span>300,00 R$</span>
                                </div>
                            </div>
                            <div id="pagar"><p>Pagar</p></div>
                        </div>
                    </div>`;
    produto.innerHTML = addCarrinho;
});

/* ao clicar em pagar  */

const pagar = document.querySelector("#pagar");

pagar.addEventListener("click", () => {
    const formaPagamento = `<div id="containerFormaPagamento">
                                <div class="titulo">
                                    <span>Escolha a forma de pagamento</span>
                                </div>

                                <div id="pagamentos">
                                    <div id="pix" class="areaPagamento">
                                        <div class="tituloPagamento">
                                            <h4>Pix</h4>
                                            <div class="divDawn"><i class="fa-solid fa-caret-down"></i></div>
                                        </div>
                                    </div>
                                    <hr>
                                    <div id="cartão" class="areaPagamento">
                                        <div class="tituloPagamento">
                                            <h4>Cartão</h4>
                                            <div class="divDawn">
                                                <i class="fa-solid fa-caret-down"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>`;
    produto.innerHTML = formaPagamento;
});

/* funcionalidade do botão eliminar */
const botaoEliminar = document.querySelectorAll(".bntExcluir");

botaoEliminar.length(botoesEliminar);
botoesEliminar.addEventListener("click", eliminarItem => {
    
});

