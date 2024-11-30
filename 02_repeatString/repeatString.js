const repeatString = function (text, no) {
    
    if (no < 0) {
    
    return "ERROR";
        
    }
    let repeat = ""; 
    let i = 0;
    while ( i < no)  {
            repeat += text;
        i++;
        }
        return repeat;
    
};

// Do not edit below this line
module.exports = repeatString;
