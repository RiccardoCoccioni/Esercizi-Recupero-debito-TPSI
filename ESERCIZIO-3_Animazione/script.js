let campoDiv = document.getElementById("div-container");

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
    divBlu.id = divBlu;
    divBlu.style.background = "darkblue";
    divBlu.style.height = "150px";
    divBlu.style.width = "75px";
    divBlu.style.position = "absolute";
    divBlu.style.left = "0px";
    divBlu.style.top = "0px";

    campoDiv.appendChild(divBlu);
} generaStruttura();