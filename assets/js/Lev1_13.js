/* 
Aufgabenstellung

Verwenden die Array-Methode join(), um alle Elemente eines Arrays durch ein Trennzeichen getrennt zu einem String zu verketten.

Deklariere Variablen meinText1, meinText2, meinText3.
Definiere die Variable meinText1 mit dem Wert: ["Hello", "World"]
Definiere die Variable meinText2 mit dem Wert: ["Anass", "Elaine", "Eric", "Georg"]
Definiere die Variable meinText3 mit dem Wert: ["Superman", "Wonderwoman", "Hulk", "Batman", "Spiderman"]

Deklariere Variablen: join1, join2, join3, join4.
Definiere die Variable join1 mit dem Wert: meinText1.join();
Definiere die Variable join2 mit dem Wert: meinText1.join("");
Definiere die Variable join3 mit dem Wert: meinText1.join(" ");
Definiere die Variable join4 mit dem Wert: meinText1.join("+");

Teste auch zwei weitere Variablen meinText2 und meinText3.
 */

let meinText1 = ["Hello", "World"]
console.log(meinText1)
let meinText2 = ["Anass", "Elaine", "Eric", "Georg"]
console.log(meinText2)
let meinText3 = ["Superman", "Wonderwoman", "Hulk", "Batman", "Spiderman"]
console.log(meinText3)


let join1 = meinText1.join();
console.log(join1)
let join2 = meinText1.join("");
console.log(join2)
let join3 = meinText1.join(" ");
console.log(join3)
let join4 = meinText1.join("+");
console.log(join4)

console.log(meinText2.join());
console.log(meinText2.join(""));
console.log(meinText2.join(" "));
console.log(meinText2.join("+"));

console.log(meinText3.join());
console.log(meinText3.join(""));
console.log(meinText3.join(" "));
console.log(meinText3.join("+"));

