let areaGioco = document.getElementById("area-gioco");


let dimensione_griglia = 8;

let lunghezzaNavi = [4, 3, 2];

let celleNaviP1 = [];
let celleNaviP2 = [];

let giocatoreCorrente = "p1";
let indiceNaveCorrente = 0;
let celleSelezionatePerNave = [];

function generaSetupIniziale(){
    let bottoneAvvia = document.createElement("button");
    bottoneAvvia.classList.add("btn-avvio");
    bottoneAvvia.textContent = "Avvia partita";
    bottoneAvvia.addEventListener("click", avviaPartita);

    areaGioco.appendChild(bottoneAvvia)
}

function avviaPartita(){
    areaGioco.innerHTML = "";

    let areaP1 = creaAreaGiocatore("Player 1", "griglia-p1");
    let areaP2 = creaAreaGiocatore("Player 2", "griglia-p2");

    areaP2.classList.add("nascosta");

    areaGioco.appendChild(areaP1);
    areaGioco.appendChild(areaP2);

    avviaFasePosizionamento("p1");
}

function avviaFasePosizionamento(giocatore){
    giocatoreCorrente = giocatore;
    indiceNaveCorrente = 0;
    celleSelezionatePerNave = [];;

    aggiornaIstruzioni();
    avviaClickPosizionamento(giocatore);
}


function creaGriglia(idGriglia){
    let  contenitoreGriglia = document.createElement("div");
    contenitoreGriglia.classList.add("griglia");
    contenitoreGriglia.id = idGriglia;
    
    for(let riga = 0; riga < dimensione_griglia; riga++){
        for (let colonna = 0; colonna < dimensione_griglia; colonna++) {
            let cella = document.createElement("div");
            cella.classList.add("cella");
            cella.dataset.riga = riga;
            cella.dataset.colonna = colonna;
    
            contenitoreGriglia.append(cella);
        }
    }

    return contenitoreGriglia;
}

function creaAreaGiocatore(nomeGiocatore, idGriglia){
    let areaGiocatore = document.createElement("div");
    areaGiocatore.classList.add("area-giocatore");
    areaGiocatore.id = "area-" + idGriglia;

    let etichetta = document.createElement("h2");
    etichetta.classList.add("nome-giocatore");
    etichetta.textContent = nomeGiocatore;

    let istruzioni = document.createElement("p");
    istruzioni.classList.add("istruzioni");
    istruzioni.id = "istruzioni-" + idGriglia;

    let griglia = creaGriglia(idGriglia);

    areaGiocatore.appendChild(etichetta);
    areaGiocatore.appendChild(istruzioni);
    areaGiocatore.appendChild(griglia);

    return areaGiocatore;
}


function avviaClickPosizionamento(giocatore){
    let idGriglia = "griglia-" + giocatore;
    let griglia = document.getElementById(idGriglia);
    let celle = griglia.querySelectorAll(".cella");

    for (let i = 0; i < cella.length; i++) {
        celle[i].addEventListener("click", function(){
            gestisciClickPosizionamento(celle[i]);
        })
    }
}

function gestisciClickPosizionamento(cella){
    if (cella.classList.contains("nave-piazzata")) {
        return;
    }

    cella.classList.add("nave-piazzata");
    celleSelezionatePerNave.push(cella);

    let lunghezzaNaveCorrente = lunghezzaNavi[indiceNaveCorrente];

    if(celleSelezionatePerNave.length === lunghezzaNaveCorrente){
        if(giocatoreCorrente === "p1"){
            celleNaviP1.push(celleSelezionatePerNave);
        }
        else {
            celleNaviP2.push(celleSelezionatePerNave);
        }

        indiceNaveCorrente++;
        celleSelezionatePerNave = [];

        if(indiceNaveCorrente === lunghezzaNavi.length){
            finisciPosizionamento();
            return;
        }
    }

    aggiornaIstruzioni();
}

function finisciPosizionamento(){
  let idGriglia = "griglia-" + giocatoreCorrente;
    let istruzioni = document.getElementById("istruzioni-" + idGriglia);
    istruzioni.textContent = "Flotta pronta";
 
    let bottoneConferma = document.createElement("button");
    bottoneConferma.classList.add("btn-avvio");
    bottoneConferma.textContent = "Conferma flotta";
 
    bottoneConferma.addEventListener("click", function(){
        bottoneConferma.remove();
        passaAlProssimoGiocatore();
    });
 
    document.getElementById("area-griglia-" + giocatoreCorrente).appendChild(bottoneConferma);
}

function aggiornaIstruzioni(){
    let idGriglia = "griglia-" + giocatoreCorrente;
    let istruzioni = document.getElementById("istruzioni-" + idGriglia);
 
    let lunghezzaNaveCorrente = LUNGHEZZE_NAVI[indiceNaveCorrente];
    let celleRimaste = lunghezzaNaveCorrente - celleSelezionatePerNave.length;
 
    istruzioni.textContent = "Posiziona la nave da " + lunghezzaNaveCorrente + " celle — mancano " + celleRimaste + " celle";
}
 
function passaAlProssimoGiocatore(){
    if (giocatoreCorrente === "p1") {
        document.getElementById("area-griglia-p1").classList.add("nascosta");
        document.getElementById("area-griglia-p2").classList.remove("nascosta");
        avviaFasePosizionamento("p2");
    } else {
        console.log("Entrambi i giocatori hanno posizionato le navi, si passa alla fase di combattimento");
    }
}
 
generaSetupIniziale();