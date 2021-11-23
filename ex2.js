document.getElementById("exo2").innerHTML ="<tr><th>Annee</th><th>Interets</th><th>Valeur Futur</th></tr>"
for (var i = 1; i <= Duree; i++) {


    var VF = parseFloat(Vinitial*(1+Taux/100));

    document.getElementById("exo2").innerHTML += "<tr><td>" + i + "</td><td>" + (Vinitial * Taux/100).toFixed(2) + "</td><td>" + VF.toFixed(2) + "</td></tr>"

    Vinitial = VF;
}

