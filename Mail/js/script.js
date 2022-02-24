let btnSend = document.querySelector('#btn');
let validator = document.querySelector('#output');
let validMail = ['pier@gmail.it', 'pg@gmail.it', 'piras@gmail.it', 'p_g@gmail.it', 'p5@gmail.it'];


btnSend.addEventListener('click', function() {
    let searchName = document.querySelector('#mail-text').value;
    let found = false;

    for (let i = 0; i < validMail.length; i++) {
        if (validMail[i].toLowerCase() == searchName.toLowerCase()) {
            found = true;
        }

        if (found == true) {
            validator.innerHTML = 'Mail confermata';
        } else {
            validator.innerHTML = 'Mail non trovata';
        }
    }
})