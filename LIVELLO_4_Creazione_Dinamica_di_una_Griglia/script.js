let griglia = document.getElementById("griglia");
function generaGriglia(){
    griglia.innerHTML = "";
    for(let riga = 0; riga < 5; riga++)
    {
        for(let colonna = 0; colonna < 5; colonna++){

            let nuovaCella = document.createElement("div");
            
            nuovaCella.classList.add("cella");


            griglia.appendChild(nuovaCella);
        }
    }
}

