let campo = document.getElementById("numero-input");
let risultato = document.getElementById("risultato");

campo.addEventListener("input", function() {
    let numero = Number(campo.value);

    if (numero > 0) {
        risultato.textContent = "Il numreo è positivo";
    }
    else if(numero < 0) {
        risultato.textContent = "Il numero è negativo";
    }
    else {
        risultato.textContent = "Il numero è zero";
    }
})