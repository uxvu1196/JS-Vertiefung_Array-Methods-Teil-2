/* 
Aufgabenstellung

Schreibe ein kleines Programm, das Zeichenketten umzukehrt.
Diese Funktion soll jeden String, der ihr übergeben wird umdrehen können (nutze einen Parameter)
Du wirst Array-Methoden verwenden müssen um den String umzudrehen

Bonus:
Wenn es mehrere Wörter gibt: drehe jedes Wort einzeln um.
Tipp: Du musst schauen, ob es in der übergebenen Zeichenkette mehrere Wörter gibt! 

Rufe die Funktion mit Deinem Namen als Parameter auf.
Überprüfe das Ergebnis in der Konsole.
Versuche diese Begriffe umzukehren.
Sergio, Hannah, Regallager, Reliefpfeiler, Rentner
Versuche diese Sätze umzukehren.
Ella mag alle Bohnen   // han nesaH has ennaH
 */

/* 
let name1 = [
    "Sergio", "Hannah", "Regallager", "Reliefpfeiler", "Rentner"
]
console.log(name1.reverse()) 
*/


function umdrehen(s) {
    return s.split("").reverse().join("");
}

console.log(umdrehen("Sergio, Hannah, Regallager, Reliefpfeiler, Rentner, Ella mag alle Bohnen, han nesaH has ennaH, Nie Solo sein "))


/*
CHEN
function reverseName(param) {
    console.log(reverse())
}
names = ["Sergio, Hannah, Regallager, Reliefpfeiler, Rentner"] */
