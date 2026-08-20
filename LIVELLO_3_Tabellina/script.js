let tabellina = document.getElementById("campo-tabellina");
let numero = document.getElementById("numero");
let calcolo;
function tabellinaNumero(){

    tabellina.textContent = "";

    for (let i = 1; i <= 10; i++) {
        let numeroInput = Number(numero.value);
        calcolo = numeroInput * i;

        tabellina.textContent += numeroInput + " x " + i + " = " + calcolo + " ";
    }
}