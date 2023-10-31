
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


/* escolher mesa */ 
const produto = document.querySelector("#Produto");
const mesa = document.querySelector("#teste");

mesa.addEventListener("click", () => {
    produto.classList.toggle("ativo");
});

/*
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
                                                <button><i class="fa-solid fa-minus"></i></button>
                                                
                                                <input type="number" placeholder="Outro" min="1" max="10" value="1">
                    
                                                <button><i class="fa-solid fa-plus"></i></button>

                                                <div id="excluirItem">
                                                    <i class="fa-solid fa-trash"></i>
                                                </div>
                                            </div>
                                            
                                        </div>

                                    </div>
                                </div>
                            </div>
*/

/* pagar */

const pagar = document.querySelector("#pagar");

pagar.addEventListener("click", () => {
    const formaPagamento = document.querySelector("#containerFormaPagamento");

    formaPagamento.classList.toggle("ativo");
});