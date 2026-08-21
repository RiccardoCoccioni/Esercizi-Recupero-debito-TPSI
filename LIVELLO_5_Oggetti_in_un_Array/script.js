let navi = [
    { nome: "Incrociatore", colpita: false },
    { nome: "Sottomarino", colpita: false },
    { nome: "Fregata", colpita: false }
];

let listaNavi = document.getElementById("lista-navi");

function mostraNavi(){
    listaNavi.innerHTML = "";

    for(let i = 0; i < navi.length; i++){

        let indice = i;

        let riga = document.createElement("li");
        riga.textContent = navi[indice].nome + " - Colpita: " + navi[indice].colpita + " ";

        let bottone = document.createElement("button");
        bottone.textContent = "Colpisci";
        bottone.classList.add("btn", "btn-sm", "btn-danger");

        bottone.addEventListener("click", function(){
            navi[indice].colpita = true;
            mostraNavi();
        });

        riga.appendChild(bottone);
        listaNavi.appendChild(riga);
    }
}

mostraNavi();