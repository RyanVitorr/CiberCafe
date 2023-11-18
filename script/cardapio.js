// onload
const listaCardapioBurguer = [
    {
        nome: 'X-TUDO',
        preco: 'R$ 10,00',
        imagem:'https://www.incrivel.com/_next/image/?url=https%3A%2F%2Fincrivel-prd.adtsys.com.br%2Fwp-content%2Fuploads%2F2022%2F11%2Fburger_carne_incri%CC%81vel.png&w=1920&q=75'
    },
    {
        nome: 'X-SALADA',
        preco: 'R$ 10,00',
        imagem:'https://www.incrivel.com/_next/image/?url=https%3A%2F%2Fincrivel-prd.adtsys.com.br%2Fwp-content%2Fuploads%2F2022%2F11%2Fburger_carne_incri%CC%81vel.png&w=1920&q=75'
    },
    {
        nome: '3 TORRES',
        preco: 'R$ 10,00',
        imagem:'https://www.incrivel.com/_next/image/?url=https%3A%2F%2Fincrivel-prd.adtsys.com.br%2Fwp-content%2Fuploads%2F2022%2F11%2Fburger_carne_incri%CC%81vel.png&w=1920&q=75'
    },
    {
        nome: 'VEGETARIANO',
        preco: 'R$ 10,00',
        imagem:'https://www.incrivel.com/_next/image/?url=https%3A%2F%2Fincrivel-prd.adtsys.com.br%2Fwp-content%2Fuploads%2F2022%2F11%2Fburger_carne_incri%CC%81vel.png&w=1920&q=75'
    },
    {
        nome: 'DA CASA',
        preco: 'R$ 10,00',
        imagem:'https://www.incrivel.com/_next/image/?url=https%3A%2F%2Fincrivel-prd.adtsys.com.br%2Fwp-content%2Fuploads%2F2022%2F11%2Fburger_carne_incri%CC%81vel.png&w=1920&q=75'
    },
    {
        nome: 'x-PODRÃO',
        preco: 'R$ 10,00',
        imagem:'https://www.incrivel.com/_next/image/?url=https%3A%2F%2Fincrivel-prd.adtsys.com.br%2Fwp-content%2Fuploads%2F2022%2F11%2Fburger_carne_incri%CC%81vel.png&w=1920&q=75'
    },
    {
        nome: 'nome da comida',
        preco: 'R$ 10,00',
        imagem:'https://www.incrivel.com/_next/image/?url=https%3A%2F%2Fincrivel-prd.adtsys.com.br%2Fwp-content%2Fuploads%2F2022%2F11%2Fburger_carne_incri%CC%81vel.png&w=1920&q=75'
    },
    {
        nome: 'nome da comida',
        preco: 'R$ 10,00',
        imagem:'https://www.incrivel.com/_next/image/?url=https%3A%2F%2Fincrivel-prd.adtsys.com.br%2Fwp-content%2Fuploads%2F2022%2F11%2Fburger_carne_incri%CC%81vel.png&w=1920&q=75'
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
        nome: 'nome do salgado',
        preco: 'R$ 10,00',
        imagem:'https://www.incrivel.com/_next/image/?url=https%3A%2F%2Fincrivel-prd.adtsys.com.br%2Fwp-content%2Fuploads%2F2022%2F11%2Fburger_carne_incri%CC%81vel.png&w=1920&q=75'
    },
    {
        nome: 'nome do salgado',
        preco: '00 R$',
        imagem:'https://www.incrivel.com/_next/image/?url=https%3A%2F%2Fincrivel-prd.adtsys.com.br%2Fwp-content%2Fuploads%2F2022%2F11%2Fburger_carne_incri%CC%81vel.png&w=1920&q=75'
    },
    {
        nome: 'nome do salgado',
        preco: '00 R$',
        imagem:'https://www.incrivel.com/_next/image/?url=https%3A%2F%2Fincrivel-prd.adtsys.com.br%2Fwp-content%2Fuploads%2F2022%2F11%2Fburger_carne_incri%CC%81vel.png&w=1920&q=75'
    },
    {
        nome: 'nome do salgado',
        preco: '00 R$',
        imagem:'https://www.incrivel.com/_next/image/?url=https%3A%2F%2Fincrivel-prd.adtsys.com.br%2Fwp-content%2Fuploads%2F2022%2F11%2Fburger_carne_incri%CC%81vel.png&w=1920&q=75'
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
        nome: 'nome da bebida ',
        preco: '00 R$',
        imagem:'https://www.incrivel.com/_next/image/?url=https%3A%2F%2Fincrivel-prd.adtsys.com.br%2Fwp-content%2Fuploads%2F2022%2F11%2Fburger_carne_incri%CC%81vel.png&w=1920&q=75'
    },
    {
        nome: 'nome da bebida',
        preco: '00 R$',
        imagem:'https://www.incrivel.com/_next/image/?url=https%3A%2F%2Fincrivel-prd.adtsys.com.br%2Fwp-content%2Fuploads%2F2022%2F11%2Fburger_carne_incri%CC%81vel.png&w=1920&q=75'
    },
    {
        nome: 'nome da bebida',
        preco: '00 R$',
        imagem:'https://www.incrivel.com/_next/image/?url=https%3A%2F%2Fincrivel-prd.adtsys.com.br%2Fwp-content%2Fuploads%2F2022%2F11%2Fburger_carne_incri%CC%81vel.png&w=1920&q=75'
    },
    {
        nome: 'nome da bebida',
        preco: '00 R$',
        imagem:'https://www.incrivel.com/_next/image/?url=https%3A%2F%2Fincrivel-prd.adtsys.com.br%2Fwp-content%2Fuploads%2F2022%2F11%2Fburger_carne_incri%CC%81vel.png&w=1920&q=75'
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
        nome: 'nome da sobremesa ',
        preco: '00 R$',
        imagem:'https://www.incrivel.com/_next/image/?url=https%3A%2F%2Fincrivel-prd.adtsys.com.br%2Fwp-content%2Fuploads%2F2022%2F11%2Fburger_carne_incri%CC%81vel.png&w=1920&q=75'
    },
    {
        nome: 'nome da sobremesa',
        preco: '00 R$',
        imagem:'https://www.incrivel.com/_next/image/?url=https%3A%2F%2Fincrivel-prd.adtsys.com.br%2Fwp-content%2Fuploads%2F2022%2F11%2Fburger_carne_incri%CC%81vel.png&w=1920&q=75'
    },
    {
        nome: 'nome da sobremesa',
        preco: '00 R$',
        imagem:'https://www.incrivel.com/_next/image/?url=https%3A%2F%2Fincrivel-prd.adtsys.com.br%2Fwp-content%2Fuploads%2F2022%2F11%2Fburger_carne_incri%CC%81vel.png&w=1920&q=75'
    },
    {
        nome: 'nome da sobremesa',
        preco: '00 R$',
        imagem:'https://www.incrivel.com/_next/image/?url=https%3A%2F%2Fincrivel-prd.adtsys.com.br%2Fwp-content%2Fuploads%2F2022%2F11%2Fburger_carne_incri%CC%81vel.png&w=1920&q=75'
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


