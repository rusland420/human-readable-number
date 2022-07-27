module.exports = function toReadable (number) {
    const digit={
        0: 'zero', 
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
    }
    
    if (number<20){
        const result=digit[number];
        console.log(result);
        return result;
    }
    
    if (number>=20 && number<100){
    const dig10=(Math.floor(number/10))*10;
    const dig1=number-dig10;
    // console.log(result);
    // return result;
    
        if(dig1===0){
            const result=digit[dig10];
            console.log(result);
            return result;
        }
    const result = digit[dig10] +" "+ digit[dig1];
    console.log(result);
    return result;
    
    
    }
     if (number>=100){
    
        const dig100=(Math.floor(number/100))*100
        const dig10=(Math.floor((number-dig100)/10))*10;
        const dig1=number-(dig100+dig10);
        const dighundred=(Math.floor(number/100));
        if(dig10===0 && dig1===0){
            const result=digit[dighundred] + " hundred";
            console.log(result);
            return result;
            }
         if(dig10!=0 && dig1===0){
            const result=digit[dighundred] + " hundred " + digit[dig10];
            console.log(result);
            return result;
         }   
        if((number-dig100)<=20){
            const result=digit[dighundred] + " hundred " + digit[number-dig100];
            console.log(result);
            return result;
        }
        const result=digit[dighundred] + " hundred " + digit[dig10]+ " "+ digit[dig1];
        console.log(result);
            return result;
        }
}

