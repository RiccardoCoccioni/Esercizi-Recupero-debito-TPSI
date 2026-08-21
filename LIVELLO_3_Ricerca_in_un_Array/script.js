let elementi = [
    "Roma", "Mario", "Zaino", "Milano", "Luigi", "Quaderno",
    "Torino", "Peach", "Penna", "Napoli", "Bowser", "Matita",
    "Palermo", "Yoshi", "Righello", "Genova", "Toad", "Astuccio",
    "Bologna", "Wario", "Gomma", "Firenze", "Daisy", "Diario"
];

let risultato = document.getElementById("risultato");

let testoInput = document.getElementById("input-text")
function cercaInArray(){

    if(testoInput.value.trim() == ""){
        alert("devi inserire del testo");
        return;
    }

    for(let i = 0; i < elementi.length; i++){

        if(elementi[i] == testoInput.value){
            risultato.textContent = "La parola è presente nell'array alla posizione: " + (i + 1);
            console.log("La parola è presente nell'array alla posizione: " + i)
            return;
        }
    }

    risultato.textContent = "La parola non è presente nell'array";
}