/* 
JS Vertiefung
CodeFlow Übung lev2_2: sort() bigger numbers


Aufgabenstellung

In dieser Übung lernen wir, wie man die Nummern 0 - ∞ aufsteigend sortiert.
Sortiere die Nummern aufsteigend.
Der Code steht im Kommentarbereich.
wenn es nicht funktioniert, versuche es zu googeln
überprüfe dein Ergebnis in der Konsole


Um den sort() Befehl besser zu verstehen, schau dir dieses Video an.
 */

let numArray2 = [36, 324, 122, 62, 98, 88, 99, 1000];

function sortieren(a,b){
    return a - b   
}

console.log(numArray2.sort(sortieren))

