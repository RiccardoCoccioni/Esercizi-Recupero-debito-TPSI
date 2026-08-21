let campoBottoni = document.getElementById("contenitore-pulsanti");

function creaBottoni(){
    campoBottoni.innerHTML = "";
    
    for(let i = 0; i <= 10; i++){
        let nuovoBottone = document.createElement("button");
        console.log("bottone creato")

        nuovoBottone.textContent = "Bottone " +  (i + 1);
        nuovoBottone.classList.add("btn");
        nuovoBottone.classList.add("btn-danger");
        campoBottoni.appendChild(nuovoBottone);
        console.log("bottone appeso")
    }
}