let btnSend = document.querySelector('#btn');
let validator = document.querySelector('#output');
let validMail = ['pier@gmail.it', 'pg@gmail.it', 'piras@gmail.it', 'p_g@gmail.it', 'p5@gmail.it'];
let searchName = document.querySelector('#mail-text').value;

btnSend.addEventListener('click', function() {
    for (let i = 0; i < validMail.length; i++) {
        if (validMail[i].toLowerCase() == searchName.toLowerCase()) {
            validator.innerHTML = 'Mail confermata';
        } else {
            validator.innerHTML = 'Mail non riconosciuta';
        }
    }
})