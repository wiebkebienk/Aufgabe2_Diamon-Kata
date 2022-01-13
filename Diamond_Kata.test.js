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


//----Aufgabe b----//

     //Bezug zum Dokument
     const {charArray} = require('./diamond_kata.js')

     //was getestet werden soll
     describe('diamond_kata', () => {


        //Test 1: Ausgabe als Quadrant wird getestet
        it('Sollte einen Quadranten ergeben', () => {
            //D als Buchstabe verwendet
            const Buchstabe = charArray('D')
            Ergebnis = quadrant(Buchstabe)
            //Das Ergebnis wird getestet
            expect(Ergebnis).toStrictEqual(
                [['A', '-', '-','-'], 
                ['-', 'B', '-','-'], 
                ['-', '-', 'C','-']
                ['-', '-', '-','D']]
            )
        })
    })


//----Aufgabe c----//

    //Bezug zum Dokument
    const {charArray} = require('./diamond_kata.js')

    //was getestet werden soll
    describe('diamond_kata', () => {

        //Test 1: Ausgabe des Quadranten wird getestet
        it('Sollte einen gespiegelten Quadranten ausgeben', () => {
            //D wird als Buchstabe verwendet
            const Buchstabe = charArray('D')
            //Vorraussetzungen
            quadrant = Inhaltgeschnitten(Buchstabe)
            yMirror = Inhaltumgekehrt(quadrant)
            //Das Ergebnis wird getestet
            expect(yMirror.toStrictEqual(
                [['-','-', '-', 'A', '-', '-', '-'], 
                ['-','-', 'B', '-', 'B', '-', '-'], 
                ['-','C', '-', '-', '-', 'C', '-']
                ['D','-', '-', '-', '-', '-', 'D']]))
        })
    })


//----Aufgabe d----//

    //Bezug zum Dokument
    const {charArray} = require('./diamond_kata.js')

    //was getestet werden soll
    describe('diamond_kata', () => {

        // 1: Ausgabe der Quadranten wird getestet
        it('Sollte einen gespiegelten Quadranten ausgeben', () => {
            //D wird als Buchstabe verwendet
            const Buchstabe = charArray('D')
            //Vorraussetzungen
            yMirror = yMirror(quadrant)
            xMirror = xMirror(yMirror)
            expect(xMirror).toStrictEqual(
            [['-','-', '-', 'A', '-', '-', '-'], 
            ['-','-', 'B', '-', 'B', '-', '-'], 
            ['-','C', '-', '-', '-', 'C', '-'], 
            ['D','-', '-', '-', '-', '-', 'D'],
            ['-','C', '-', '-', '-', 'C', '-'],
            ['-','-', 'B', '-', 'B', '-', '-'], 
            ['-','-', '-', 'A', '-', '-', '-']])
        })
    })