let schermo = document.getElementById("schermo");
let contatore = 0;
let cronometro;
function avviaCronometro() {
    cronometro = setInterval(() => {
        schermo.textContent = contatore;
        contatore++;
    }, 1000);
}

function fermaCronometro(){
    clearInterval(cronometro);
}

function resetCronometro(){
    clearInterval(cronometro);
    contatore = 0;
    schermo.textContent = 0;
}