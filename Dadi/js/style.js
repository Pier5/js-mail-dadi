let btnLancia = document.querySelector('#btn');
let dadoUser = document.querySelector('#dado');
let dadoCpu = document.querySelector('#dadoDue');
let result = document.querySelector('.output');

btnLancia.addEventListener('click', function() {
    
    dadoUser.innerHTML = dado = Math.floor(Math.random() * (6) ) + 1;
    dadoCpu.innerHTML = dadoDue = Math.floor(Math.random() * (6) ) + 1;  

    if (dado > dadoDue) {
        result.innerHTML = 'Hai vinto!';
    } else if (dado == dadoDue) {
        result.innerHTML = 'Pareggio! Ritenta';
    } else {
        result.innerHTML = 'Hai perso! Ritenta';
    } 
})
    