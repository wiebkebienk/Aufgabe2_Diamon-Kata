//-----Aufgabe a------//

    //Alphabet in einem Array
    const alphabet = [
        "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
        ];
        
        //Buchstaben eingeben
        const charArray = (Buchstabe) =>{
            let indexBuchstabe, charArray = []
            //Kleinbuchstaben zu Großbuchstaben
            const Buchstabe = Buchstabe.toUpperCase();
            //überprüfen, ob es ein Buchstabe aus dem Alphabet ist
            if(alphabet.search(Buchstabe) >= 0){indexBuchstabe = alphabet.search(charArray)}
            else{
                throw new Error ("Das ist kein Buchstabe aus dem Alphabet. Bitte wähle einen anderen!")
            }
            //durchläuft Array
            for(let i = 0; i <= indexBuchstabe; i++){
                charArray[i] = alphabet[i]
            }
            //gibt Ergebnis zurück
            return charArray
        }
        
        //Modul Export
        module.exports = {
            charArray
        }

//----Aufgabe b----//

    //Quadrant erstellen
    const quadrant = (input) => {
        //Array durchlaufen
        let quadrant = [input.length]
        for(i = 0; i < input.length; i++){
            quadrant[i] = []
            let i = -1;
            //Array befüllen
            input.forEach(Buchstabe); {
                const filling = new Array(input.length);
                filling.fill("-");
                i++;
                //weiter springen, sodass ein Quadrant befüllt wird
                const where = input.length - i - 1;
                filling[where] = input[i];
                quadrant.push(filling);
            }
        }
        return quadrant; 
    }   