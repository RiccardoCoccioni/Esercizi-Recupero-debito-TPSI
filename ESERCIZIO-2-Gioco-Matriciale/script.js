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
            campoGriglia.appendChild(nuovaCella);
        }
    }

    areaSetup.classList.add("d-none");
    document.getElementById("giocatori-container").classList.remove("d-none");
}