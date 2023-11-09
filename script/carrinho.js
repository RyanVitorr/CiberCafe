
export function escolhaMesaGrupo() {};
export function escolhaMesaSolo () {};

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

function escolhaMesaGrupo () {
    for (const itensMesas of listaMesasDeGrupo) {
        const mesas = 
           `<div class="caixaMesas">
                <i class="${itensMesas.iconeMesa}"></i>
            </div>`;
    
        document.querySelector("#mesasGrupo").innerHTML += mesas;
    };    
};

const mesaGrupo = document.querySelector("#mesa-grupo");

mesaGrupo.addEventListener("click", mesaGrupo())


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