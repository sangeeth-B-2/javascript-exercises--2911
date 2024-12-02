const add = function (a, b) {
  return (a + b);

};

const subtract = function (a, b) {
  return (a - b);
};

const sum = function (arr) {
  let n = arr.length
  let result = 0;
  for(let i=0;i<n;i++){
  result +=arr[i];
  }
  return result;
};

const multiply = function (arr) {
  let n = arr.length
  let result = 1;
  for(let i=0;i<n;i++){
  result *=arr[i];
  }
  return result;
  
};

const power = function (a, b) {
  return Math.pow(a, b)
};

const factorial = function (n) {
  let result = 1;
  if (n === 0 || n === 1) {
    return result;
  } else {
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
  }
  return result;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
