let griglia = document.getElementById("griglia");
let campoTempo = document.getElementById("tempo");
let campoPunteggio = document.getElementById("punteggio");
let messaggio = document.getElementById("messaggio");

let celleSpeciali = [3, 7, 12, 18, 22];
let trovate = 0;
let secondiRimasti = 30;
let timer;
let giocoAttivo = false;

function generaGriglia(){
    griglia.innerHTML = "";
    let indice = 0;

    for(let riga = 0; riga < 5; riga++) {
        for(let colonna = 0; colonna < 5; colonna++){

            let nuovaCella = document.createElement("div");
            nuovaCella.classList.add("cella");

            let mioIndice = indice;

            nuovaCella.addEventListener("click", function(){
                if (!giocoAttivo) {
                    return;
                }

                if (celleSpeciali.includes(mioIndice) && nuovaCella.style.background !== "yellow") {
                    nuovaCella.style.background = "yellow";
                    trovate++;
                    campoPunteggio.textContent = "Trovate: " + trovate + " / " + celleSpeciali.length;

                    if (trovate === celleSpeciali.length) {
                        terminaGioco("Hai trovato tutte le celle speciali!");
                    }
                } else {
                    nuovaCella.style.background = "#dc3545";
                }
            });

            griglia.appendChild(nuovaCella);
            indice++;
        }
    }
}

function iniziaGioco(){
    generaGriglia();
    trovate = 0;
    secondiRimasti = 30;
    giocoAttivo = true;
    messaggio.textContent = "";
    campoPunteggio.textContent = "Trovate: 0 / " + celleSpeciali.length;
    campoTempo.textContent = "Tempo rimasto: " + secondiRimasti;

    clearInterval(timer);
    timer = setInterval(function(){
        secondiRimasti--;
        campoTempo.textContent = "Tempo rimasto: " + secondiRimasti;

        if (secondiRimasti <= 0) {
            terminaGioco("Tempo scaduto, Celle trovate: " + trovate + " / " + celleSpeciali.length);
        }
    }, 1000);
}

function terminaGioco(testo){
    clearInterval(timer);
    giocoAttivo = false;
    messaggio.textContent = testo;
}