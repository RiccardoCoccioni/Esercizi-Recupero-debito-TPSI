let btnInvia = document.getElementById("btn-invia");
let risultato = document.getElementById("risultato");

let campoNome = document.getElementById("nome");
let campoCognome = document.getElementById("cognome");
let campoEmail = document.getElementById("email");
let campoTelefono = document.getElementById("telefono")
let campoMessaggio = document.getElementById("messaggio");


function convalidaForm(){
    if(campoNome.value === ""){
        risultato.textContent = "Il campo nome è obbligatorio"
        risultato.style.color = "red";
        return;
    }

    if(campoCognome.value === ""){
        risultato.textContent = "Il campo cognome è obbligatorio"
        risultato.style.color = "red";
        return;
    }

    if(campoEmail.value === ""){
        risultato.textContent = "Il campo email è obbligatorio"
        risultato.style.color = "red";
        return;
    }

    if(campoTelefono.value === ""){
        risultato.textContent = "Il campo telefono è obbligatorio"
        risultato.style.color = "red";
        return;
    }

    if(campoMessaggio.value === ""){
        risultato.textContent = "Il campo messaggio è obbligatorio"
        risultato.style.color = "red";
        return;
    }

    risultato.textContent = "Modulo inviato correttamente";
    risultato.style.color = "green";
}