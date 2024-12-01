const reverseString = function(string) {
    let reverseTheString = '';
    if (string.length<0){
        return '';
    }else if (string.length>0) {
        for (let i=(string.length); i--;) {
        reverseTheString = reverseTheString.concat(string.charAt(i));
        }
    
    }
    return reverseTheString;
    
};

// Do not edit below this line
module.exports = reverseString;
