do {
    var Vinitial = prompt("Saisir le montant déposé au début de la période d'épargne :");


} while (isNaN(Vinitial) || Vinitial < 0);



do {
    var Taux = prompt("Saisir le taux d'intérêt annuel en % : ");


} while (isNaN(Taux) || Taux < 0);



do {
    var Duree = prompt("Saisir la durée d'épargne en année : ");


} while (isNaN(Duree) || Duree < 0);

var VF = parseFloat(Vinitial*Math.pow(1+Taux/100,Duree)).toFixed(2);
var txt = "Investissement initial : " + Vinitial;
txt += "<br>Taux d'intérêt annuel : " + Taux + "%";
txt += "<br>Durée en années : " + Duree;
txt += "<br>Valeur future : " + VF;
document.getElementById("exo1").innerHTML = txt;
    