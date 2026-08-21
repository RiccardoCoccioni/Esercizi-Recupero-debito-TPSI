let turnoGiocatore1 = true;
let larghezzaG1 = 100;
let larghezzaG2 = 100;
let clickTotali = 0;

let campoGriglia = document.getElementById("matrice-container");
let areaSetup = document.getElementById("setup-area");
function generaParteIniziale(){

    let label1 = document.createElement("label");
    label1.textContent = "Nome giocatore 1: ";
    label1.htmlFor = "nome1"
    console.log("creata label1 con testo e for");

    let textBox1 = document.createElement("input");
    textBox1.type = "text";
    textBox1.id = "nome1";
    textBox1.classList.add("form-control");
    textBox1.classList.add("mb-2");
    console.log("creata textbox1 con testo e classi");

    let label2 = document.createElement("label");
    label2.textContent = "Nome giocatore 2: ";
    label2.htmlFor = "nome2"
    console.log("creata label2 con testo e for");

    let textBox2 = document.createElement("input");
    textBox2.type = "text";
    textBox2.id = "nome2";
    textBox2.classList.add("form-control");
    textBox2.classList.add("mb-2");
    console.log("creata textbox2 con testo e classi");

    let bottone = document.createElement("button");

    console.log("bottone creato");
    bottone.id = "btn-avvia"; 
    bottone.classList.add("btn");
    bottone.classList.add("btn-primary");

    bottone.addEventListener("click", generaGriglia);
    bottone.textContent = "AVVIA";

    areaSetup.appendChild(label1);
    areaSetup.appendChild(textBox1);
    areaSetup.appendChild(label2);
    areaSetup.appendChild(textBox2);
    areaSetup.appendChild(bottone);
} generaParteIniziale();

function generaGriglia(){
    campoGriglia.innerHTML = "";

    let input1 = document.getElementById("nome1");
    let input2 = document.getElementById("nome2");
    let btnAvvia = document.getElementById("btn-avvia");

    let nome1 = input1.value;
    if(nome1 === ""){
        nome1 = "giocatore1"; 
    }
    let nome2 = input2.value;
    if(nome2 === ""){
        nome2 = "giocatore2";
    }

    document.getElementById("btn-giocatore1").textContent = nome1;
    document.getElementById("btn-giocatore2").textContent = nome2;

    input1.disabled = true;
    input2.disabled = true;
    btnAvvia.disabled = true;

    for(let riga = 0; riga < 3; riga++){
        for(let colonna = 0; colonna < 6; colonna++){

            let nuovaCella = document.createElement("button");
            console.log("cella creata");
            nuovaCella.classList.add("col-2");
            nuovaCella.classList.add("btn");
            nuovaCella.classList.add("btn-outline-primary");
            nuovaCella.classList.add("py-4");
            nuovaCella.classList.add("fw-bold");

            let numeroCasuale = Math.floor(Math.random() * 101) - 50;

            nuovaCella.dataset.value = numeroCasuale;
            nuovaCella.textContent = " ";

            nuovaCella.addEventListener("mouseenter", function(){
                if(!nuovaCella.disabled) {
                    document.getElementById("div-suggerimento").textContent = "Valore: " + nuovaCella.dataset.value;
                }
            })

            nuovaCella.addEventListener("mouseleave", function(){
                document.getElementById("div-suggerimento").textContent = "";
            })

            nuovaCella.addEventListener("click", function(){
                eseguiMossa(nuovaCella, parseInt(nuovaCella.dataset.value));
            })

            campoGriglia.appendChild(nuovaCella);
        }
    }
    document.getElementById("giocatori-container").classList.remove("d-none");
}

function fermaGioco(){
    let tuttiIBottoni = document.querySelectorAll("#matrice-container button");
    for(let i = 0; i < tuttiIBottoni.length; i++){
        tuttiIBottoni[i].disabled = true;
    } 
}

function eseguiMossa(bottoneCliccato, valore) {
    bottoneCliccato.disabled = true;
    bottoneCliccato.textContent = valore;
    clickTotali++;

    document.getElementById("div-suggerimento").textContent = "";

    let btnG1 = document.getElementById("btn-giocatore1");
    let btnG2 = document.getElementById("btn-giocatore2");

    let divVincitore = document.getElementById("div-vincitore");

    let nome1 = btnG1.textContent;
    let nome2 = btnG2.textContent;

    if(turnoGiocatore1){
        bottoneCliccato.classList.replace("btn-outline-primary", "btn-warning");

        larghezzaG1 += valore;
        btnG1.style.width = larghezzaG1 + "px";

        if (larghezzaG1 < 0) {
            divVincitore.textContent = nome2 + " ha vinto " + nome1 + " è sceso sotto lo 0.";
            divVincitore.classList.remove("d-none");
            fermaGioco();
            return;
        }
    }
    else{
        bottoneCliccato.classList.replace("btn-outline-primary", "btn-danger");

        larghezzaG2 += valore;
        btnG2.style.width = larghezzaG2 + "px";

        if (larghezzaG2 < 0) {
            divVincitore.textContent = nome1 + " ha vinto " + nome2 + " è sceso sotto lo 0.";
            divVincitore.classList.remove("d-none");
            fermaGioco();
            return;
        }
    }

    turnoGiocatore1 = !turnoGiocatore1;

    if(clickTotali === 18){
        if(larghezzaG1 > larghezzaG2){
            divVincitore.textContent = nome1 + " ha vinto costruendo il pulsante più grande";   
        }
        else if( larghezzaG2 > larghezzaG1){
            divVincitore.textContent = nome2 + " ha vinto costruendo il pulsante più grande";  
        }else{
            divVincitore.textContent = "pareggio";
        }
        divVincitore.classList.remove("d-none");
    }
}

