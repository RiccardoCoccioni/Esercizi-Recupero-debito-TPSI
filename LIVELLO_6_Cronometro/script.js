let schermo = document.getElementById("schermo");
let millisecondi = 0;
let cronometro;
function avviaCronometro() {
    cronometro = setInterval(() => {
        millisecondi += 10;
        aggiornaSchermo();
    }, 10);
}

function fermaCronometro(){
    clearInterval(cronometro);
}

function resetCronometro(){
    clearInterval(cronometro);
    millisecondi = 0;
    aggiornaSchermo();
}

function aggiornaSchermo(){
    let ore = Math.floor(millisecondi / 3600000);
    let minuti = Math.floor((millisecondi % 3600000) / 60000);
    let secondi = Math.floor((millisecondi % 60000) / 1000 );
    let centesimi = Math.floor((millisecondi % 1000) / 10);

    schermo.textContent = formattaCronometro(ore) + "."  + formattaCronometro(minuti) + "." + formattaCronometro(secondi) + "." + formattaCronometro(centesimi);
}

function formattaCronometro(numero){
    if(numero < 10){
        return "0" + numero;
    }
    return numero;
}

aggiornaSchermo();