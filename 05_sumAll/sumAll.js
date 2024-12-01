const sumAll = function(start,end) {
    let sumAll= 0;
    if (!Number.isInteger(start) || !Number.isInteger(end)) {
        return "ERROR";
    }
    if (start > end) {
        [start, end] = [end, start]; // Swap the values of start and end
    }
    if (start >= 0 && end >=0 ){  
    for (let i =start;i<= end;i++){
         sumAll +=i;        
        
        }
        return sumAll;
    } else return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
