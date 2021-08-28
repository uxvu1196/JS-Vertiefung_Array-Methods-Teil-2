/* 
JS Vertiefung
CodeFlow Übung lev1_2: Array reverse()

Aufgabenstellung

In dieser Übung lernen wir, wie man Arrays umgekehrt alphabetisch sortiert.
Sortiere die Programmiersprachen in umgekehrter alphabetischer Reihenfolge.
Der Code steht im Kommentar.
Deklariere Funktion sortierung2.
Verwende den Befehl sort() und reverse(), um die Aufgabe auszuführen.
Ruf die Funktion sortierung2 auf.
Überprüfe das Ergebnis in der Konsole.
 */

let languages = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];

let sortierung2 = languages.sort()
console.log(sortierung2)

console.log(sortierung2.reverse())