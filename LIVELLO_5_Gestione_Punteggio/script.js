let griglia = document.getElementById("griglia");
function generaGriglia(){
    griglia.innerHTML = "";

    let indiceCorrente = 0;
    for(let riga = 0; riga < 5; riga++)
    {
        for(let colonna = 0; colonna < 5; colonna++){

            let risultato = document.getElementById("risultato");
            let nuovaCella = document.createElement("div");
            nuovaCella.classList.add("cella");

            let mioIndice = indiceCorrente;

            nuovaCella.addEventListener("click", function(){
                if(mioIndice % 2 === 0) {
                    nuovaCella.style.background = "green";
                    risultato.textContent = "Hai trovato una cella speciale";
                }
                else {
                    nuovaCella.style.background = "gray";
                    risultato.textContent = "non hai trovato una cella speciale";
                }
            })
            
            griglia.appendChild(nuovaCella);
            indiceCorrente++;
        }
    }
}

