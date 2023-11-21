// onload
const listaCardapioBurguer = [
    {
        nome: 'X-TUDO',
        preco: 'R$ 7,50',
        imagem:'../img/cardapio/X-tudo.jpg'
    },
    {
        nome: 'X-SALADA',
        preco: 'R$ 8,00',
        imagem:'../img/cardapio/X-salada.avif'
    },
    {
        nome: '3 TORRES',
        preco: 'R$ 15,00',
        imagem:'../img/cardapio/3 torres.jpg'
    },
    {
        nome: 'VEGETARIANO',
        preco: 'R$ 10,00',
        imagem:'../img/cardapio/vegetariano.jpg'
    },
    {
        nome: 'DA CASA',
        preco: 'R$ 7,00',
        imagem:'../img/cardapio/da casa.jpg'
    },
    {
        nome: 'x-PODRÃO',
        preco: 'R$ 12,50',
        imagem:'../img/cardapio/podrao.jpg'
    },
];


window.onload = function() {
    for (const itensCardapio of listaCardapioBurguer) {
   
        const cardapio  =  
        
       `<div class="cardCardapio">
            <div class="img-div">
                <img class="imgCardCardapio" src="${itensCardapio.imagem}" alt="">
            </div>
               
            <div class="infosCardCardapio">
                <span class="nome-produto">${itensCardapio.nome}</span>
                <span class="preco-produto">${itensCardapio.preco}</span>
            </div>
               
            <button type="button" class="bntComprar" onclick="addAoCarrinho(event)">
                adicionar ao carrinho
            </button>
        </div>`;
     
        document.querySelector("#menuCardapio").innerHTML += cardapio;
    }
};


// ao lcicar no botao burguer

document.getElementById("hamburguer").addEventListener("click", () => {
    const cardCardapio = document.querySelectorAll(".cardCardapio");
    cardCardapio.forEach((cards) => {cards.remove();});
   
    for (const itensCardapio of listaCardapioBurguer) {
   
        const cardapio  =  
        
       `<div class="cardCardapio">
            <div class="img-div"><img class="imgCardCardapio" src="${itensCardapio.imagem}" alt=""></div>
               
            <div class="infosCardCardapio">
                <span>${itensCardapio.nome}</span>
                <span>${itensCardapio.preco}</span>
            </div>
               
            <button type="button" class="bntComprar" onclick="addAoCarrinho(event)">
                adicionar ao carrinho
            </button>
        </div>`;
     
        document.querySelector("#menuCardapio").innerHTML += cardapio;
    
    };
});

//cardapio salgados
const listaCardapioSalgados = [
    {
        nome: 'Coxinha',
        preco: 'R$ 3,50',
        imagem:'../img/cardapio/coxinha.jpg'
    },
    {
        nome: 'Pão Pizza',
        preco: 'R$ 5,00',
        imagem:'../img/cardapio/paopizza.jpg'
    },
    {
        nome: 'Pastel',
        preco: 'R$ 4,00',
        imagem:'../img/cardapio/patelForno.jpg'
    },
    {
        nome: 'Enroladinho',
        preco: 'R$ 2,50',
        imagem:'../img/cardapio/enroladinho.png'
    }
];

document.getElementById('salgados').addEventListener('click', () => {
    const cardCardapio = document.querySelectorAll(".cardCardapio");
    cardCardapio.forEach((cards) => {cards.remove();});
   
    for (const itensCardapio of listaCardapioSalgados) {     
       
        const cardapioSalgado  =  
    
        `<div class="cardCardapio">
            <div class="img-div"><img class="imgCardCardapio" src="${itensCardapio.imagem}" alt=""></div>
                
            <div class="infosCardCardapio">
                <span>${itensCardapio.nome}</span>
                <span>${itensCardapio.preco}</span>
            </div>
                
            <button type="button" class="bntComprar" onclick="addAoCarrinho(event)">
                adicionar ao carrinho
            </button>
        </div>`;

        document.querySelector("#menuCardapio").innerHTML += cardapioSalgado;
    };
});


//cardapio bebidas
const listaCardapioBebidas = [
    {
        nome: 'Coca-Cola',
        preco: 'R$ 7,50',
        imagem:'../img/cardapio/coca cola.png'
    },
    {
        nome: 'Pepsi',
        preco: 'R$ 4,50',
        imagem:'../img/cardapio/pepsi.webp'
    },
    {
        nome: 'Mimosa',
        preco: 'R$ 3,50',
        imagem:'../img/cardapio/suco de laranja.avif'
    },
    {
        nome: 'Corote',
        preco: 'R$ 5,00',
        imagem:'../img/cardapio/corote.jpeg'
    }
];

document.getElementById('bebidas').addEventListener('click', () => {
    const cardCardapio = document.querySelectorAll(".cardCardapio");
    cardCardapio.forEach((cards) => {cards.remove();});
   
    for (const itensCardapio of listaCardapioBebidas) {     
       
        const cardapioBebidas  =  
    
        `<div class="cardCardapio">
            <div class="img-div"><img class="imgCardCardapio" src="${itensCardapio.imagem}" alt=""></div>
                
            <div class="infosCardCardapio">
                <span>${itensCardapio.nome}</span>
                <span>${itensCardapio.preco}</span>
            </div>
                
            <button type="button" class="bntComprar" onclick="addAoCarrinho(event)">
                adicionar ao carrinho
            </button>
        </div>`;

        document.querySelector("#menuCardapio").innerHTML += cardapioBebidas;
    };
});


// cardapio sobremesas
const listaCardapioSobremesas = [
    {
        nome: 'Pavê',
        preco: 'R$ 7,50',
        imagem:'../img/cardapio/pave.jpg'
    },
    {
        nome: 'Torta de limão',
        preco: 'R$ 5,50',
        imagem:'../img/cardapio/tortaLimao.jpg'
    },
    {
        nome: 'Sorvetes',
        preco: 'R$ 1,50',
        imagem:'../img/cardapio/sorvete.jpg'
    },
    {
        nome: 'Pudim',
        preco: 'R$ 4,00',
        imagem:'../img/cardapio/pudim.jpg'
    }
];

document.getElementById('sobremesas').addEventListener('click', () => {
    const cardCardapio = document.querySelectorAll(".cardCardapio");
    cardCardapio.forEach((cards) => {cards.remove();});
   
    for (const itensCardapio of listaCardapioSobremesas) {     
       
        const cardapioSobremesas  =  
    
        `<div class="cardCardapio">
            <div class="img-div"><img class="imgCardCardapio" src="${itensCardapio.imagem}" alt=""></div>
                
                
            <div class="infosCardCardapio">
                <span>${itensCardapio.nome}</span>
                <span>${itensCardapio.preco}</span>
            </div>
                
            <button type="button" class="bntComprar" onclick="addAoCarrinho(event)">
                adicionar ao carrinho
            </button>
        </div>`;

        document.querySelector("#menuCardapio").innerHTML += cardapioSobremesas;
    };
});


