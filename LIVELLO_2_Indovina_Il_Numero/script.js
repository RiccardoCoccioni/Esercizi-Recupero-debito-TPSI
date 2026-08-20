let btn = document.getElementById("invia");
let numeroCas = Math.floor(Math.random() * 20) + 1;

let numeroTentativi = document.getElementById("numero-tentativi");
let contaTent = 1;

function indovinaNumero() {
    
    let numeroInput = document.getElementById("numero-input");
    let risultato = document.getElementById("risultato");
    if(numeroInput.value > numeroCas){
        risultato.textContent = "Il numero è troppo grande";
    }
    else if( numeroInput.value < numeroCas){
        risultato.textContent = "Il numero è troppo piccolo"
    }
    else{
        risultato.textContent = "Hai indovinato";
    }

    numeroTentativi.textContent = "Tentativi: " + contaTent;
    contaTent++;
}

let campo = document.getElementById("numero-input");

campo.addEventListener("input", function() {
    let numero = Number(campo.value);

    if (numero > 20) {
        campo.value = 20;
    }
});