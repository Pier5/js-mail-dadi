let btnLancia = document.querySelector('#btn');
let dadoUser = document.querySelector('#dado');
let dadoCpu = document.querySelector('#dadoDue');

btnLancia.addEventListener('click', function() {
    
    dadoUser.innerHTML = dado = Math.round(Math.random()*6);
    dadoCpu.innerHTML = dadoDue = Math.round(Math.random()*6);  

    if (dado > dadoDue) {
        alert("Hai vinto")
    } else if (dado == dadoDue) {
        alert("Pareggio");
    } else {
        alert("Hai perso");
    } 
})
    