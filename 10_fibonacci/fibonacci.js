const fibonacci = function (n) {
    if (typeof n ==="string"){
        n= Number(n);
    }
    if (n < 0) return 'OOPS';
    if (n === 0 )return 0; 
    if (typeof n === "number") {
        let a = 0, b = 1;
        for (let i = 2; i <= n; i++) {
            let fib = a + b;
            a = b;
            b = fib;
        }
        return b;
    }
    
};

// Do not edit below this line
module.exports = fibonacci;
