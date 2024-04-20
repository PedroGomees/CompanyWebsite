window.addEventListener('scroll', function(){
    var scrollHeight = window.scrollY;
    var header = document.getElementById('myHeader');

    if(scrollHeight > 100){
        header.classList.add('headerFinal');
        header.classList.remove('headerInicial');
    }else{
        header.classList.remove('headerFinal');
        header.classList.add('headerInicial');
    }
})

window.addEventListener('scroll', function(){
    var scrollHeight = window.scrollY;
    var cardA = document.getElementById('cardA');
    var cardB = document.getElementById('cardB');
    var cardC = document.getElementById('cardC');
    if(scrollHeight > 130){
        cardA.classList.add('moveCards');
        cardB.classList.add('moveCardsB');
        cardC.classList.add('moveCards');
    }else{
        cardA.classList.remove('moveCards');
        cardB.classList.remove('moveCardsB');
        cardC.classList.remove('moveCards');
    }
})


const produtos = {
    plataformas:[{
        id:1, tipo:"neon", src:"plataforma.png", price:5000},
        {
            id:2, tipo:"listra", src:"plataformalistra.png",  price:5000}
    
    
    ],
    lampadas:[{
        id:3, tipo:"branca", src:"branca.png",  price:5000
    }],
    tunel:[{
        id:0, tipo:"tunel", src:"tunel.png",  price:5000
    }]
}


const containerProducts = document.getElementById('produtosMain');
const categoriaButtons = document.querySelectorAll('.btnC');

categoriaButtons.forEach(function(btn){
    btn.addEventListener('click', function(){
        const categoriaSelecionada = btn.getAttribute('data-categoria');
        containerProducts.innerHTML = '';

        if(produtos[categoriaSelecionada]){
        
    produtos[categoriaSelecionada].forEach(function(products){
        const produtoElement = document.createElement('div');
        produtoElement.classList.add('produto');
        const imagemElement = document.createElement('img');
        imagemElement.src = products.imagem;
        imagemElement.alt = products.tipo;

        
        const tipoElement = document.createElement('p');
        tipoElement.textContent = `Tipo: ${products.tipo} Preço: ${products.price}`;

        produtoElement.appendChild(imagemElement);
        produtoElement.appendChild(tipoElement);

        containerProducts.appendChild(produtoElement);
    });

        }else{
            const erroElement = document.createElement('p');
            erroElement.textContent = 'Categoria não encontrada.';
            produtosContainer.appendChild(erroElement);
        }
    })
})


/*const listContainer = document.getElementById('listas');
const search = document.getElementById('search');
const headerLoja = document.getElementById('lojaHeader');


function render(products){
   let list ='';

   if(products.length <= 0){
    list += `<div id="no-products">Nenhum produto disponível</div>`;
   }else{
    products.forEach((product, index) => {
        list +=`
            <div class="product">
            <div class="product-image">
            <img src = "${product.poster} " alt= " ">
            </div>
            ${product.title} - ${product.price}
            <a hrf="#">
                <div class= "product-button" data-id= " ${product.id}">
                   <input type = button> Deletar </input>
                                   </div>
        `
    });

    }
    listContainer.innerHTML = list;
        
    };
   */



render(products);