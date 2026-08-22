let areaGioco = document.getElementById("area-gioco");

function generaSetupIniziale(){
    let bottoneAvvia = document.createElement("button");
    bottoneAvvia.classList.add("btn-avvio");
    bottoneAvvia.textContent = "Avvia partita";
    bottoneAvvia.addEventListener("click", avviaPartita);

    areaGioco.appendChild(bottoneAvvia)
}

function avviaPartita(){
    areaGioco.innerHTML = "";
    console.log("Partita avviata, qui genereremo le griglie");

}

generaSetupIniziale();