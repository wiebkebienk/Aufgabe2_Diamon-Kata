# Aufgabe2_Diamon-Kata
Aufgabe 2 im Kurs Web Development

In dieser Aufgabe geht es darum, die Buchstaben im Alphabet so anzuordnen, dass sie einen Diamanten ergeben. Dabei wird der letzte Buchstabe vom Enduser bestimmt. Wenn also der Enduser A vorgibt, so besteht der Diamant lediglich aus

A

Wählt der Enduser aber das C, so bestünde der Diamant aus

--A--

-B-B-

C---C

-B-B-

--A--

Der User kann alle Buchstaben des Alphabets von A-Z nutzen um die Größe des Diamanten zu bestimmen.

Bei der Bearbeitung der Aufgabe erstellen Sie bitte wieder pro Teilaufgabe einen aussagekräftigen git-Branch mit z.B. git checkout -b a_charRange. Bei jeder Aufgabe wird davon ausgegangen, dass Sie zuerst einen Test schreiben, um die Funktionalität der zu schreibenden Funktion schreiben und erst dann die Funktion selbst.

a) charRange

Schreiben Sie eine Funktion, die die Buchstaben von A bis zu einem gegebenen Buchstaben in ein Array bringt.Sprich

charRange('C') === ['A', 'B', 'C']

Testen Sie auch was passiert, wenn der gegebne Buchstabe lediglich 'A' ist. Außerdem soll die Funktion eine Exception werfen, sollte der Buchstabe nicht Teil des Alphabets von A-Z sein.

Falls der gegebene Buchstabe die kleine Ausgabe eine Buchstaben ist, so soll vorher der kleine Buchstabe in sein großes Pendant verwandelt werden. Also:

charRange('c') === ['A', 'B', 'C'].

Sie könnten sich genötigt fühlen einfach alle Varianten hard zu codieren. Aber das würde den Code sehr unübersichtlich machen. Stellen Sie sicher, das die Funktion nicht mehr als 10 Zeilen einnimmt.

b) createQuadrant

Schreiben Sie eine Funktion, die ein Array von Großbuchstaben entgegen nimmt und diese Buchstaben wie Folgt in Arrays anordnet:

createQuadrant(['A', 'B', 'C']) === [

['-', '-', 'A'],

['-', 'B', '-'],

['C', '-', '-']

]

Beachten Sie auch hier die Randfälle, die auftreten können. Was wenn das übergebene Array leer ist? Wird hier eine Sonderbehandlung überhaupt benötigt?

c) mirrorByYAxis

Schreiben Sie eine Funktion, die die Buchstaben eines Array von Arrays als Eingabe entgegen nimmt (siehe Aufgabe b)) und diese die ersten n-1 spalten ohne die letzte Spalte in umgekehrter Reihenfolge ans Array der jeweligen Zeile konkateniert:

mirrorByYAxis([

['-', '-', 'A'],

['-', 'B', '-'],

['C', '-', '-']

]) === [

['-', '-', 'A', '-', '-'],

['-', 'B', '-', 'B', '-'],

['C', '-', '-'. '-', 'C']

]

Welche Sonderfälle können hier auftreten? Was passiert wenn das Array leer ist? Was wenn die verschiedenen Zeilen unterschiedlich lang sind? d) mirrorByXAxis Schreiben Sie eine Funktion, die die Zeilen eines Eingabe-Arrays wie aus Aufgabe c) in umgekehrter Reihenfolge ohne die letzte Zeile anfügt: mirrorByXAxis([ ['-', '-', 'A', '-', '-'],

['-', 'B', '-', 'B', '-'],

['C', '-', '-'. '-', 'C']

]) === [ ['-', '-', 'A', '-', '-'],

['-', 'B', '-', 'B', '-'],

['C', '-', '-'. '-', 'C'],

['-', 'B', '-', 'B', '-'],

['-', '-', 'A', '-', '-']

]

e) diamond Schreiben Sie eine Funktion namens diamond, die ein AusgabeArray wie in Aufgabe d) entgegen nimmt und das Array in einen zusamenhängenden String konvertiert. Der String soll mit console.log ausgegeben werden. D.h. Sie werden testen müssen ob ein eingegebene Mock-Funktion für console.log mit dem finalen String aufgerufen wurde. Diese Funktion soll außerdem sinnvolle und leicht verständliche Fehlermledungen ausgeben, wenn in einem der darunter liegenden Funktionen eine Exception geworfen wird.

f) index Schreiben Sie eine index.js-Datei, die die Funktion aus Aufgabe e) aufruft und via process.argv vom Enduser den Endbuchstaben und einen weiteres Zeichen entgegen nimmt welches den Platzhalter '-' in den bisherigen Varianten ersetzen kann. Wie würden Sie ihr Programm anpassen um den Platzhalter manipulieren zu können.