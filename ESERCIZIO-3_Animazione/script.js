let campoDiv = document.getElementById("div-container");
let areaSetup = document.getElementById("area-setup");

let posizioneAttuale = 0;
let direzione = 1;
let animazione;

function generaStruttura(){
    for(let i = 0; i < 10; i++){
        let nuovoDiv = document.createElement("div");

        nuovoDiv.style.background = "yellow";
        nuovoDiv.style.height = "150px";
        nuovoDiv.style.width = "75px";
        nuovoDiv.style.border = "1px solid #ccc";

        campoDiv.appendChild(nuovoDiv);
    }

    let divBlu = document.createElement("div");
    divBlu.id = "div-blu";
    divBlu.style.background = "darkblue";
    divBlu.style.height = "150px";
    divBlu.style.width = "75px";
    divBlu.style.position = "absolute";
    divBlu.style.left = "0px";
    divBlu.style.top = "0px";

    campoDiv.appendChild(divBlu);

    let bottoneAvvia = document.createElement("button");
    bottoneAvvia.id = "btn-avvia";
    bottoneAvvia.textContent = "Avvia Animazione";
    bottoneAvvia.classList.add("btn");
    bottoneAvvia.classList.add("btn-success");
    bottoneAvvia.classList.add("mx-2");
    bottoneAvvia.classList.add("mt-3");
    bottoneAvvia.addEventListener("click", avviaAnimazione);

    let messaggioAvvio = document.createElement("p");
    messaggioAvvio.id = "messaggio-avvio";
    messaggioAvvio.classList.add("text-center");
    messaggioAvvio.classList.add("mt-2");

    let bottoneStop = document.createElement("button");
    bottoneStop.id = "btn-stop";
    bottoneStop.textContent = "Stop Animazione";
    bottoneStop.classList.add("btn");
    bottoneStop.classList.add("btn-danger");
    bottoneStop.classList.add("mx-2");
    bottoneStop.addEventListener("click", fermaAnimazione);

    areaSetup.appendChild(bottoneAvvia);
    areaSetup.appendChild(messaggioAvvio);
    areaSetup.appendChild(bottoneStop);

}

function avviaAnimazione(){
    let messaggioAvvio = document.getElementById("messaggio-avvio");
    let btnAvvia = document.getElementById("btn-avvia");
    btnAvvia.disabled = true;

    messaggioAvvio.textContent = "L'animazione partirà entro 3 secondi";

    setTimeout(function(){
        messaggioAvvio.textContent = "";
        btnAvvia.disabled = false;

        let divBlu = document.getElementById("div-blu");

        animazione = setInterval(function(){
            posizioneAttuale += direzione;

            if (posizioneAttuale >= 9) {
                direzione = -1;
            }
            if (posizioneAttuale <= 0) {
                direzione = 1;
            }

            divBlu.style.left = (posizioneAttuale * 75) + "px";
        }, 50);

    }, 3000);
}

function fermaAnimazione(){
    clearInterval(animazione);
}

generaStruttura();