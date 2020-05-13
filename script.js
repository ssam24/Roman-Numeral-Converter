function convertToRoman(num) {
    const lookupTable = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10, 
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    };

    let accumulator = ''; 

    for ( const key in lookupTable) {
        const numberValue = lookupTable[key];
        console.log (key, numberValue);

        while (numberValue <= num){
            num -= numberValue;
            accumulator += key;
        }
    }
   

    // create roman numeral to munber lookup table

    // create roman numeral accumulator

    //loop through lookup table 

    //while (currentNumber <= num) then subtract currentNumber from num. Add symbol to acumulator

    // return acumulator 
    
     
    return accumulator;
   }
   
   convertToRoman(36);
   