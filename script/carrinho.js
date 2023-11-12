
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
           `<div class="mesas" id="${itensMesas.idMesa}">
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

let mesa = document.querySelectorAll(".mesas");
const escolhaCompra = document.querySelector("#card-escolha-compra");
const escolheuMesa = `  <div class="card-mesa-escolhida">
                            <div class="img-card-mesa-escolhida">
                                <img src="#" alt="">
                            </div>

                            <div class="infos-card-mesa-escolhida">
                                <div class="nome-mesa-escolhida">
                                    <span>Mesa de Grupo 1</span>
                                </div>

                                <div class="tempo-aluguel-mesa-escolhida">
                                    <div class="titulo-tempo-aluguel">
                                        <p>Tempo aluguel:</p>
                                    </div>

                                    <div class="bnt-aluguel">
                                        <button class="bnt-hora" id="bnt-esquerda" type="button"></button>

                                        <div class="area-tempo-aluguel">
                                            <p>1</p>
                                        </div>

                                        <button class="bnt-hora"  id="bnt-direita" type="button"></button>

                                        <button type="button" class="bnt-excluir"></button>
                                    </div>
                                </div>
                            </div>
                        </div> `;


for(let i=0; i < mesa.length; i++) {
    let mesas = mesa[i];
    mesas.addEventListener("click", () => {
        escolhaCompra.innerHTML += escolheuMesa;
    });
};

function addInfoMesa() {
    
    escolhaCompra.innerHTML += escolheuMesa;
};
// função botao eliminar compra


const bntEliminarItem = document.querySelectorAll("bnt-excluir");
for(let i=0; i < bntEliminarItem.length; i++) {
    let bnt = bntEliminarItem[i];
    bnt.addEventListener("click", eliminarItemCarrinho);
};

function eliminarItemCarrinho() {
    escolheuMesa.remove();
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

function escolhaMesaSolo () {
    for (const itensMesas of listaMesasSolo) {
        const mesas = 
           `<div class="caixaMEsaSolo">
                <i class="${itensMesas.iconeMesa}"></i> 
            </div>`;
    
        document.querySelector("#mesasSolo").innerHTML += mesas;
    };    
};

// funcionalidade do botão eliminar

const removerProduto = document.getElementsByClassName("bnt-excluir");
for (var i = 0; i < removerProduto.length; i++) {
    removerProduto[i].addEventListener("click", function(event) {
        console.log(event.target);
    })
}