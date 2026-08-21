let griglia = document.getElementById("griglia");
let punteggio = 0;
let campoPunteggio = document.getElementById("punteggio");

function generaGriglia(){
    griglia.innerHTML = "";
    punteggio = 0;
    aggiornaPunteggio();

    for(let riga = 0; riga < 5; riga++)
    {
        for(let colonna = 0; colonna < 5; colonna++){

            let risultato = document.getElementById("risultato");
            let nuovaCella = document.createElement("div");
            nuovaCella.classList.add("cella");

            let valoreCella = Math.floor(Math.random() * 11);

            nuovaCella.addEventListener("click", function(){
                punteggio += valoreCella;
                aggiornaPunteggio();

                nuovaCella.textContent = valoreCella;
                nuovaCella.style.background = valoreCella

                if (valoreCella > 0) {
                    nuovaCella.style.background = "green";
                } else {
                    nuovaCella.style.background = "gray";
                }
            })
            
            griglia.appendChild(nuovaCella);
        }
    }
}

function aggiornaPunteggio(){
    campoPunteggio.textContent = "Punteggio: " + punteggio;
}

