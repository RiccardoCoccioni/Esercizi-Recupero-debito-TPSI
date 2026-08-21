let campoTesto = document.getElementById("text");
let lista = document.getElementById("lista");


function aggiungiLista(){
    if(campoTesto.value.trim() === ""){
        alert("devi inserire del testo");
        return;
    }

    let nuovoElemento =  document.createElement("li");
    nuovoElemento.textContent = campoTesto.value;
    
    lista.appendChild(nuovoElemento);
    campoTesto.value = "";
}