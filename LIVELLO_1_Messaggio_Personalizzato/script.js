function mostraMessaggio() {
    let messaggio = document.getElementById("messaggioPersonalizzato");

    let btn = document.getElementById("btn-saluta");

    let Inputnome = document.getElementById("input-nome");

    btn.addEventListener("click", function() {
        let nome = Inputnome.value;
        messaggio.textContent = "Ciao " + nome + " benvenuto";
    })
} mostraMessaggio();