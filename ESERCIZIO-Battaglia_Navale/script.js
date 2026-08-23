let areaGioco = document.getElementById("area-gioco");
let dimensione_griglia = 8;
let lunghezzaNavi = [4, 3, 2];


let secondiRimasti = 180;
let timerPartita;

let celleNaviP1 = [];
let celleNaviP2 = [];

let tentativiP1 = 0;
let tentativiP2 = 0;

let celleColpiteNaviP1 = 0;
let celleColpiteNaviP2 = 0;
let totaleCelleNaviP1 = 0;
let totaleCelleNaviP2 = 0;
 
let giocatoreCorrente = "p1";
let indiceNaveCorrente = 0;
let celleSelezionatePerNave = [];


let fasePartita = "posizionamento";
function generaSetupIniziale(){
    let bottoneAvvia = document.createElement("button");
    bottoneAvvia.classList.add("btn-avvio");
    bottoneAvvia.textContent = "Avvia partita";
    bottoneAvvia.addEventListener("click", avviaPartita);
 
    areaGioco.appendChild(bottoneAvvia);
}
 
function creaGriglia(idGriglia){
    let contenitoreGriglia = document.createElement("div");
    contenitoreGriglia.classList.add("griglia");
    contenitoreGriglia.id = idGriglia;
 
    for(let riga = 0; riga < dimensione_griglia; riga++){
        for(let colonna = 0; colonna < dimensione_griglia; colonna++){
            let cella = document.createElement("div");
            cella.classList.add("cella");
            cella.dataset.riga = riga;
            cella.dataset.colonna = colonna;
 
            contenitoreGriglia.appendChild(cella);
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

    let statistiche = document.createElement("p");
    statistiche.classList.add("statistiche");
    statistiche.id= "statistiche-" + idGriglia;
    let griglia = creaGriglia(idGriglia);
 
    areaGiocatore.appendChild(etichetta);
    areaGiocatore.appendChild(istruzioni);
    areaGiocatore.appendChild(statistiche);
    areaGiocatore.appendChild(griglia);
 
    return areaGiocatore;
}
 
function avviaPartita(){
    areaGioco.innerHTML = "";
    
    let displayTimer = document.createElement("p");
    displayTimer.id = "display-timer";
    displayTimer.classList.add("display-timer");

    let areaP1 = creaAreaGiocatore("Player 1", "griglia-p1");
    let areaP2 = creaAreaGiocatore("Player 2", "griglia-p2");
 
    areaP2.classList.add("nascosta");
    
    let areaMessaggio = document.createElement("p");
    areaMessaggio.id = "messaggio-finale"; 
    areaMessaggio.classList.add("messaggio-finale");
    areaGioco.appendChild(displayTimer);
    areaGioco.appendChild(areaP1);
    areaGioco.appendChild(areaP2);
    areaGioco.appendChild(areaMessaggio);
    avviaFasePosizionamento("p1");
}
 
function avviaFasePosizionamento(giocatore){
    giocatoreCorrente = giocatore;
    indiceNaveCorrente = 0;
    celleSelezionatePerNave = [];
 
    aggiornaIstruzioni();
    avviaClickPosizionamento(giocatore);
}
 
function aggiornaIstruzioni(){
    let idGriglia = "griglia-" + giocatoreCorrente;
    let istruzioni = document.getElementById("istruzioni-" + idGriglia);
 
    let lunghezzaNaveCorrente = lunghezzaNavi[indiceNaveCorrente];
    let celleRimaste = lunghezzaNaveCorrente - celleSelezionatePerNave.length;
 
    istruzioni.textContent = "Posiziona la nave da " + lunghezzaNaveCorrente + " celle — mancano " + celleRimaste + " celle";
}
 
function avviaClickPosizionamento(giocatore){
    let idGriglia = "griglia-" + giocatore;
    let griglia = document.getElementById(idGriglia);
    let celle = griglia.querySelectorAll(".cella");
 
    for(let i = 0; i < celle.length; i++){
        celle[i].addEventListener("click", function(){
            gestisciClickPosizionamento(celle[i]);
        });
    }
}
 
function gestisciClickPosizionamento(cella){
    if(fasePartita !== "posizionamento"){
        return;
    }

    if (cella.classList.contains("nave-piazzata")) {
        return;
    }

    if (!isCellaValida(cella)) {
        console.log("Mossa non valida: devi piazzare le navi in linea retta");
        return;
    }

    cella.classList.add("nave-piazzata");
    celleSelezionatePerNave.push(cella);

    let lunghezzaNaveCorrente = lunghezzaNavi[indiceNaveCorrente];

    if (celleSelezionatePerNave.length === lunghezzaNaveCorrente) {
        if (giocatoreCorrente === "p1") {
            celleNaviP1.push(celleSelezionatePerNave);
            tentativiP1++;
        } else {
            celleNaviP2.push(celleSelezionatePerNave);
            tentativiP2++;
        }

        indiceNaveCorrente++;
        celleSelezionatePerNave = [];

        if (indiceNaveCorrente === lunghezzaNavi.length) {
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
 
function passaAlProssimoGiocatore(){
    if (giocatoreCorrente === "p1") {
        document.getElementById("area-griglia-p1").classList.add("nascosta");
        document.getElementById("area-griglia-p2").classList.remove("nascosta");
        avviaFasePosizionamento("p2");
    } else {
        console.log("Entrambi i giocatori hanno posizionato le navi. Si passa alla fase di combattimento.");
        avviaCombattimento();
    }
}
 
generaSetupIniziale();


function avviaCombattimento(){

    fasePartita = "combattimento";

    totaleCelleNaviP1 = contaTotaleCelleNavi(celleNaviP1);
    totaleCelleNaviP2 = contaTotaleCelleNavi(celleNaviP2);

    document.getElementById("area-griglia-p1").classList.remove("nascosta");
    document.getElementById("area-griglia-p2").classList.remove("nascosta");

    let tutteLeCelle = document.querySelectorAll(".cella");

    for(let i = 0; i < tutteLeCelle.length; i++){
        tutteLeCelle[i].classList.remove("nave-piazzata");
    }

    giocatoreCorrente = "p1";
    
    document.getElementById("istruzioni-griglia-p1").textContent = "la tua flotta, attendo il tuo turno";
    document.getElementById("istruzioni-griglia-p2").textContent = "griglia nemica: spara";

    aggiornaTestoTurno();
    aggiornaStatistiche();
    attivaClickCombattimento();
    attivaCountdown();
}

function attivaCountdown(){

    aggiornaDisplayTimer();

    timerPartita = setInterval(function () {
    
        secondiRimasti--;
        aggiornaDisplayTimer();

        if (secondiRimasti <= 0) {
            clearInterval(timerPartita);
            terminaPerTempoScaduto();
        }
    }, 1000);
}

function aggiornaDisplayTimer(){
    let minuti = Math.floor(secondiRimasti / 60);
    let secondi = secondiRimasti % 60;

    if(secondi < 10){
        secondi = "0" + secondi;
    }

    document.getElementById("display-timer").textContent = "Tempo rimasto: " + minuti + ": " + secondi;
}
    
function terminaPerTempoScaduto(){
    fasePartita = "finita";

    let messaggio = document.getElementById("messaggio-finale");

    if(celleColpiteNaviP2 > celleColpiteNaviP1){

        messaggio.textContent = "Tempo scaduto, player 2 vince per danni inflitti";
    }
    else{
        messaggio.textContent = "Tempo scaduto, player 1 vince per danni inflitti";
    }
}


function aggiornaTestoTurno(){
    if(giocatoreCorrente === "p1"){
        document.getElementById("istruzioni-griglia-p1").textContent = "La tua flotta - attendi il tuo turno";

        document.getElementById("istruzioni-griglia-p2").textContent = "Griglia nemica, spara";
    }
    else{
        document.getElementById("istruzioni-griglia-p2").textContent = "La tua flotta - attendi il tuo turno";

        document.getElementById("istruzioni-griglia-p1").textContent = "Griglia nemica, spara";
    }
}


function aggiornaStatistiche(){
    let celleRimasteP1 = totaleCelleNaviP1 - celleColpiteNaviP1;
    let celleRimasteP2 = totaleCelleNaviP2 - celleColpiteNaviP2;

    document.getElementById("statistiche-griglia-p1").textContent = "parti di nave rimaste: " + celleRimasteP1 + " - tentativi ricevuti: " + tentativiP2;

    document.getElementById("statistiche-griglia-p2").textContent = "parti di nave rimaste: " + celleRimasteP2 + " - tentativi ricevuti: " + tentativiP1;
}

function attivaClickCombattimento(){
    let celleP1 = document.getElementById("griglia-p1").querySelectorAll(".cella");
    let celleP2 = document.getElementById("griglia-p2").querySelectorAll(".cella");

    for(let i = 0; i < celleP1.length; i++){
        celleP1[i].addEventListener("click", function(){
            gestisciSparo(celleP1[i], "p1");
        });
    }

    for(let i = 0; i < celleP2.length; i++){
        celleP2[i].addEventListener("click", function(){
            gestisciSparo(celleP2[i], "p2");
        });
    }
}

function gestisciSparo(cellaCliccata, grigliaBersaglio){
    if(fasePartita !== "combattimento"){
        return;
    }

    if(giocatoreCorrente === grigliaBersaglio){
        console.log("Non puoi sparare alla tua stessa flotta");
        return;
    }

    if(cellaCliccata.classList.contains("acqua") || cellaCliccata.classList.contains("colpito")){
        console.log("Hai già sparato qui");
        return;
    }

    let flottaDaControllare;

    if (grigliaBersaglio === "p1") {
        flottaDaControllare = celleNaviP1;
    } else {
        flottaDaControllare = celleNaviP2;
    }

    let colpoASegno = false;

    for(let i = 0; i < flottaDaControllare.length; i++){
        let nave = flottaDaControllare[i];
        for(let j = 0; j < nave.length; j++){
            if(nave[j] === cellaCliccata){
                colpoASegno = true;
                break;
            }
        }
        if (colpoASegno){
            break;
        }
    }
    if(colpoASegno){
        cellaCliccata.classList.add("colpito");
        cellaCliccata.textContent = "X";

        if(grigliaBersaglio === "p1"){
            celleColpiteNaviP1++;
        } else{
            celleColpiteNaviP2++;
        }
    } else{
        cellaCliccata.classList.add("acqua");
        cellaCliccata.textContent = "~";
    }

    aggiornaStatistiche();

    if(celleColpiteNaviP1 === totaleCelleNaviP1){
        terminaPartita("Player 2");
        return;
    }

    if(celleColpiteNaviP2 === totaleCelleNaviP2){
        terminaPartita("Player 1");
        return;
    }

    if(giocatoreCorrente === "p1"){
        giocatoreCorrente = "p2";
        document.getElementById("istruzioni-griglia-p1").textContent = "griglia nemica: spara";
        document.getElementById("istruzioni-griglia-p2").textContent = "la tua flotta. Attendi";
    } else{
        giocatoreCorrente = "p1";
        document.getElementById("istruzioni-griglia-p1").textContent = "la tua flotta. Attendi";
        document.getElementById("istruzioni-griglia-p2").textContent = "griglia Nemica: Spara";
    }
}

function terminaPartita(PlayerVincitore){
    clearInterval(timerPartita);
    fasePartita = "finita";

    let messaggio = document.getElementById("messaggio-finale");
    messaggio.textContent = PlayerVincitore + " ha vinto. Tentativi p1: " + tentativiP1 + " Tentativi p2: " + tentativiP2;
}

function isCellaValida(nuovaCella) {
    if(celleSelezionatePerNave.length === 0){
        return true;
    }

    let rigaNuova = parseInt(nuovaCella.dataset.riga);
    let colNuova = parseInt(nuovaCella.dataset.colonna);

    let ultimaCella = celleSelezionatePerNave[celleSelezionatePerNave.length - 1];
    let rigaUltima = parseInt(ultimaCella.dataset.riga);
    let colUltima = parseInt(ultimaCella.dataset.colonna);

    let diffRiga = Math.abs(rigaNuova - rigaUltima);
    let diffCol = Math.abs(colNuova - colUltima);

    if (diffRiga + diffCol !== 1) {
        return false;
    }

    if (celleSelezionatePerNave.length >= 2) {
        let primaCella = celleSelezionatePerNave[0];
        let rigaPrima = parseInt(primaCella.dataset.riga);
        let colPrima = parseInt(primaCella.dataset.colonna);

        if (rigaPrima === rigaUltima && rigaNuova !== rigaPrima) {
            return false;
        }
        if (colPrima === colUltima && colNuova !== colPrima) {
            return false;
        }
    }

    return true;
}


function contaTotaleCelleNavi(celleNavi){
    let totale = 0;
    for(let i = 0; i < celleNavi.length; i++){
        totale += celleNavi[i].length;
    }

    return totale;
}