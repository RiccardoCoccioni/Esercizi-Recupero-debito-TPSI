function avviaSemaforo(){
    document.getElementById("rosso").style.backgroundColor = "gray";
    document.getElementById("verde").style.backgroundColor = "green";
    document.getElementById("btn-avvia").style.display = "none";
    setTimeout(function(){
        document.getElementById("giallo").style.backgroundColor = "yellow";
    }, 5000);

    setTimeout(function(){
        document.getElementById("verde").style.backgroundColor = "gray";
        document.getElementById("giallo").style.backgroundColor = "gray";
        document.getElementById("rosso").style.backgroundColor = "red";

        document.getElementById("btn-avvia").style.display = "block";
    }, 7000);
}