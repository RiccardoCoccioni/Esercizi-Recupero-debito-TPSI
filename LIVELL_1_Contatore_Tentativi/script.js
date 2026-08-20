let contatore = document.getElementById("contatore");
let btn = document.getElementById("btn-incrementa");
let contaPunti = 1;
function incrementaContatore(){
    contatore.textContent = "Contatore " + contaPunti;
    contaPunti++;
}

let reset = document.getElementById("btn-reset");

function resettaContatore(){
    contatore.textContent = "Contatore: 0";
    contaPunti = 1;
}