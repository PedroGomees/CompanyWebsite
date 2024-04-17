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