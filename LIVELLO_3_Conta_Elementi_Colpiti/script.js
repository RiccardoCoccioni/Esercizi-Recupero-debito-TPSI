let risultato = document.getElementById("risultato");
let risultati = ["acqua", "colpito", "acqua", "colpito", "colpito", "acqua"];
let contatore;

function contaColpiti(){
    let contatore = 0;
    for(let i = 0; i < risultati.length; i++){
        if(risultati[i] == "colpito"){
            contatore++;
        }
        console.log("Numero di colpiti: " + contatore);
    }
    risultato.textContent = "Sono stati colpiti " + contatore + " volte";
}