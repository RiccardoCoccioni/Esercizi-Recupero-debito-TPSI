let campo = document.getElementById("numero-input");
let risultato = document.getElementById("risultato");

campo.addEventListener("input", function() {
    let numero = Number(campo.value);

    if ((numero % 2) == 1 ) {
        risultato.textContent = "Il numreo è dispari";
    }
    else {
        risultato.textContent = "Il numero è pari";
    }
})