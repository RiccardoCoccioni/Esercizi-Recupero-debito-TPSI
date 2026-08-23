document.getElementById("btn-invia").onclick = function() {
    let nome = document.getElementById("campo-nome").value;
    let cognome = document.getElementById("campo-cognome").value;
    let email = document.getElementById("campo-email").value;
    let argomento = document.getElementById("scelta-argomento").value;
    let messaggio = document.getElementById("campo-messaggio").value;
    let esito = document.getElementById("esito-form");

    if (nome == "" || cognome == "" || email == "" || argomento == "" || messaggio == "") {
        esito.className = "mt-3 mb-0 errore";
        esito.innerHTML = "Mancano dei dati";
    } else {
        if (e.indexOf("@") == -1) {
            esito.className = "mt-3 mb-0 errore";
            esito.innerHTML = "Email non valida";
        } else {
            esito.className = "mt-3 mb-0 successo";
            esito.innerHTML = "Modulo inviato";
            
            document.getElementById("campo-nome").value = "";
            document.getElementById("campo-cognome").value = "";
            document.getElementById("campo-email").value = "";
            document.getElementById("scelta-argomento").value = "";
            document.getElementById("campo-messaggio").value = "";
        }
    }
}