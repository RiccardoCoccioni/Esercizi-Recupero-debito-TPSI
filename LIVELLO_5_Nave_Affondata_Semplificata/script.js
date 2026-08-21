let griglia = document.getElementById("griglia");
let risultato = document.getElementById("risultato");
let pezziRimasti = 3;
function generaGriglia(){
    griglia.innerHTML = "";
    pezziRimasti = 3;
    aggiornaMessaggio();

    let indiceCorrente = 0;
    for(let riga = 0; riga < 5; riga++)
    {
        for(let colonna = 0; colonna < 5; colonna++){

            let nuovaCella = document.createElement("div");
            nuovaCella.classList.add("cella");

            let faParteDellaNave = false;
            if(indiceCorrente === 6 || indiceCorrente === 7 || indiceCorrente === 8){
                faParteDellaNave = true;
            }

            nuovaCella.addEventListener("click", function(){
                if(faParteDellaNave){
                    nuovaCella.style.background = "red";
                    pezziRimasti--;
                    aggiornaMessaggio();

                    if(pezziRimasti === 0){
                        risultato.textContent = "Nave affondata";
                    }  
                }
                else{
                nuovaCella.style.background = "blue";
                }
            })
            
            griglia.appendChild(nuovaCella);
            indiceCorrente++;
        }
    }
}

function aggiornaMessaggio(){
    risultato.textContent = "Pezzi della nave rimasti: " + pezziRimasti;
}