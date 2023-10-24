
const listaCardapioBurguer = [
    {
        nome: 'nome da comida',
        preco: '00 R$',
        imagem:'https://www.incrivel.com/_next/image/?url=https%3A%2F%2Fincrivel-prd.adtsys.com.br%2Fwp-content%2Fuploads%2F2022%2F11%2Fburger_carne_incri%CC%81vel.png&w=1920&q=75'
    },
    {
        nome: 'nome da comida',
        preco: '00 R$',
        imagem:'https://www.incrivel.com/_next/image/?url=https%3A%2F%2Fincrivel-prd.adtsys.com.br%2Fwp-content%2Fuploads%2F2022%2F11%2Fburger_carne_incri%CC%81vel.png&w=1920&q=75'
    },
    {
        nome: 'nome da comida',
        preco: '00 R$',
        imagem:'https://www.incrivel.com/_next/image/?url=https%3A%2F%2Fincrivel-prd.adtsys.com.br%2Fwp-content%2Fuploads%2F2022%2F11%2Fburger_carne_incri%CC%81vel.png&w=1920&q=75'
    },
    {
        nome: 'nome da comida',
        preco: '00 R$',
        imagem:'https://www.incrivel.com/_next/image/?url=https%3A%2F%2Fincrivel-prd.adtsys.com.br%2Fwp-content%2Fuploads%2F2022%2F11%2Fburger_carne_incri%CC%81vel.png&w=1920&q=75'
    },
    {
        nome: 'nome da comida',
        preco: '00 R$',
        imagem:'https://www.incrivel.com/_next/image/?url=https%3A%2F%2Fincrivel-prd.adtsys.com.br%2Fwp-content%2Fuploads%2F2022%2F11%2Fburger_carne_incri%CC%81vel.png&w=1920&q=75'
    },
    {
        nome: 'nome da comida',
        preco: '00 R$',
        imagem:'https://www.incrivel.com/_next/image/?url=https%3A%2F%2Fincrivel-prd.adtsys.com.br%2Fwp-content%2Fuploads%2F2022%2F11%2Fburger_carne_incri%CC%81vel.png&w=1920&q=75'
    },
    {
        nome: 'nome da comida',
        preco: '00 R$',
        imagem:'https://www.incrivel.com/_next/image/?url=https%3A%2F%2Fincrivel-prd.adtsys.com.br%2Fwp-content%2Fuploads%2F2022%2F11%2Fburger_carne_incri%CC%81vel.png&w=1920&q=75'
    },
    {
        nome: 'nome da comida',
        preco: '00 R$',
        imagem:'https://www.incrivel.com/_next/image/?url=https%3A%2F%2Fincrivel-prd.adtsys.com.br%2Fwp-content%2Fuploads%2F2022%2F11%2Fburger_carne_incri%CC%81vel.png&w=1920&q=75'
    },
];

for (const itensCardapio of listaCardapioBurguer) {
   
    const cardapio  =  
    
   `<div class="cardCardapio">
        <img class="imgCardCardapio" src="${itensCardapio.imagem}" alt="">
           
        <div class="infosCardCardapio">
            <h3>${itensCardapio.nome}</h3>
            <h4>${itensCardapio.preco}</h4>
        </div>
           
        <div class="bntComprar">
            <p>adicionar ao carrinho</p>
        </div>
    </div>`;
 
    document.querySelector(".menuCardapio").innerHTML += cardapio;
}
 

//cardapio salgados
const listaCardapioSalgados = [
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
             <img class="imgCardCardapio" src="${itensCardapio.imagem}" alt="">
                
             <div class="infosCardCardapio">
                <h3>${itensCardapio.nome}</h3>
                <h4>${itensCardapio.preco}</h4>
             </div>
                
             <div class="bntComprar">
                <p>adicionar ao carrinho</p>
             </div>
        </div>`;

        document.querySelector(".menuCardapio").innerHTML += cardapioSalgado;
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
             <img class="imgCardCardapio" src="${itensCardapio.imagem}" alt="">
                
             <div class="infosCardCardapio">
                <h3>${itensCardapio.nome}</h3>
                <h4>${itensCardapio.preco}</h4>
             </div>
                
             <div class="bntComprar">
                <p>adicionar ao carrinho</p>
             </div>
        </div>`;

        document.querySelector(".menuCardapio").innerHTML += cardapioBebidas;
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
             <img class="imgCardCardapio" src="${itensCardapio.imagem}" alt="">
                
             <div class="infosCardCardapio">
                <h3>${itensCardapio.nome}</h3>
                <h4>${itensCardapio.preco}</h4>
             </div>
                
             <div class="bntComprar">
                <p>adicionar ao carrinho</p>
             </div>
        </div>`;

        document.querySelector(".menuCardapio").innerHTML += cardapioSobremesas;
    };
});