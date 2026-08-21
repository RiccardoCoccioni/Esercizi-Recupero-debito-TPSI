let schermo = document.getElementById("schermo");
let campoSecondi = document.getElementById("secondi-input");
let messaggio = document.getElementById("messaggio");
let secondiRimasti = 0;
let timer;

function avviaTimer() {
    secondiRimasti = Number(campoSecondi.value);
    messaggio.textContent = "";
    schermo.textContent = secondiRimasti;

    timer = setInterval(function() {
        secondiRimasti--;
        schermo.textContent = secondiRimasti;

        if (secondiRimasti <= 0) {
            clearInterval(timer);
            messaggio.textContent = "Tempo scaduto!";
        }
    }, 1000);
}

function fermaTimer() {
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    secondiRimasti = 0;
    schermo.textContent = "00";
    messaggio.textContent = "";
}