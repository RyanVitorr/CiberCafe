
const listacardapio = [
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



for (const itensCardapio of listacardapio) {
   
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
 

const listacardapio2 = [
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

const salgados = document.getElementById('salgados');
salgados.addEventListener('click', () => {
    for (const itensCardapio2 of listacardapio2) {     
       
        const cardapio2  =  
    
        `<div class="cardCardapio">
             <img class="imgCardCardapio" src="${itensCardapio2.imagem}" alt="">
                
             <div class="infosCardCardapio">
                <h3>${itensCardapio2.nome}</h3>
                <h4>${itensCardapio2.preco}</h4>
             </div>
                
             <div class="bntComprar">
                <p>adicionar ao carrinho</p>
             </div>
        </div>`;
      
         document.querySelector(".menuCardapio").innerHTML = cardapio2;
    }
})
