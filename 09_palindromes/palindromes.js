const palindromes = function (string) {
    
const reverseString = function (str){
    
    let pureString = str.replace(/[\s\p{P}]/gu, '');
    return pureString.split('').reverse().join('');
}    
let reverseStringFinal = reverseString(string);
let OgStringCleaned = string.replace(/[\s\p{P}]/gu, '').toUpperCase();
return OgStringCleaned === reverseStringFinal.toUpperCase();
};

// Do not edit below this line
module.exports = palindromes;
