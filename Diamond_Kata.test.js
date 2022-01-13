//----Aufgabe a----//    
    
    //Bezug zum Dokument
    const {charArray} = require('./diamond_kata.js')

    //was getestet werden soll
    describe('diamond_kata', () => {

        //Test 1: Sollte A zurück geben
        it('Sollte einen Buchstaben zurück geben', () => {
            const Buchstabe = 'A'
            Ergebnis = charArray(Buchstabe)
            expect(Ergebnis).toStrictEqual(['A'])
        })

        //Test 2: Sollte den Buchstaben zu einem Großbuchstaben machen
        it('Sollte zu Großbuchstaben umwandeln', () => {
            const Buchstabe = 'r'
            Ergebnis = charArray(Buchstabe)
            expect(Ergebnis).toStrictEqual(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'])
        })

        //Test 3: Sollte nicht richtige Eingaben erkennen
        it('Sollte nicht richtige Eingaben erkennen', () => {
            const Buchstabe = '+-'
            Ergebnis = charArray(Buchstabe)
            expect((Ergebnis) => {charArray(Buchstabe)}).toThrow("Das ist kein Buchstabe aus dem Alphabet. Bitte wähle einen anderen!")
        })
    })
