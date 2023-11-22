const carrinho = document.querySelector("#comprar");
// adicionar produto ao carrinho

function addAoCarrinho(event) {
    const botao = event.target
    const infoProduto = botao.parentElement;
    const imgProduto = infoProduto.getElementsByClassName("imgCardCardapio")[0].src;
    const nomeProduto = infoProduto.getElementsByClassName("nome-produto")[0].innerText;
    const precoProduto = infoProduto.getElementsByClassName("preco-produto")[0].innerText;


    const novoCardItemCarrinho = `<div class="card-item-carrinho">  
                                    <div class="img-item-carrinho">
                                        <img src="${imgProduto}" alt="imagem do lanche">
                                    </div>

                                    <div class="infos-item-carrinho">
                                        <div class="nome-item-carrinho">
                                            <span>${nomeProduto}</span>
                                        </div>

                                        <div class="div-preco-mesa">
                                            <span>Preço:</span> 
                                            <span class="valor-preco">${precoProduto}</span>
                                        </div>

                                        <div class="bnt-carrinho">
                                            <div class="bnt-pri">       
                                            <input class="input-aluguel" type="number" value="1" min="1" onclick="atualizarTotal()">                                      
                                            </div>

                                            <div class="bnt-seg">
                                                <button class="bnt-excluir" onclick="excluirItemCarrinho(event)"></button>
                                            </div>
                                        </div>
     
                                    </div>  
                                </div>`;


    document.querySelector("#conteudo-item-carrinho").innerHTML += novoCardItemCarrinho;
    
    if (carrinho.style.display == "") {
        carrinho.style.display = "flex"
    }

    valorTotal = 0;
    pegarValorAluguel()
    atualizarTotal()
;};






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

// ao clicar no botão de excluir item do carrinho --------------------------------------
function excluirItemCarrinho(event) {
    event.target.parentElement.parentElement.parentElement.parentElement.remove();
    valorTotal = 0;
    pegarValorAluguel()
};

// ao clicar em cancelar --------------------------------------------------------------

function cancelar() {

    const cardItemCarrinho = document.querySelectorAll(".card-item-carrinho");
    cardItemCarrinho.forEach((cardItemCarrinho) => {cardItemCarrinho.remove();});
    
    valorTotal = 0
    pegarValorAluguel()

    const mesa = document.querySelectorAll(".mesas")
    mesa.forEach((mesa) => {mesa.remove();});

    if (carrinho.style.display == "flex") {
        carrinho.style.display = "";
    }
    
    localizacao.classList.toggle("ativo");
};

// bnt comprar ------------------------------------------------------------------------
const bntComprar = document.querySelector("#comprar");
const mostrarPagamento = document.querySelector("#pagamento");
const localizacao = document.querySelector("#localizacao");


function comprar() {
    if (valorTotal == "0,00") {
        alert("Seu carrinho está vazio!")
    } else {
        localizacao.classList.toggle("ativo");
    }
}

// clicar me pagar (cartao)
const pagar = document.querySelector("#botao-pagar-cartao");
pagar.addEventListener("click", () => {
    let nome = document.getElementById("nome").value;
    let numero = document.getElementById("numero-cartao").value;
    let validade = document.getElementById("validade").value;
    let cvv = document.getElementById("CVV").value;   
    
    if (nome == "" || numero == "" || validade == "" || cvv == "") {
        alert("Preencha todos os campos!")
    } else {
        alert("Pagamento realizado com sucesso!!!");
    }
    
});