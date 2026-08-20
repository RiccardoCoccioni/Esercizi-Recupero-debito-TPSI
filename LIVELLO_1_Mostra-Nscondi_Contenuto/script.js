let mostra = false;
let paragrafo = document.getElementById("paragrafo");

function mostraOnascondiParagrafo(){

    if (mostra == false) {
        paragrafo.style.display = "none";
        mostra = true;
    }
    else if(mostra == true){
        paragrafo.style.display = "block";
        mostra = false;
    }

}