const convertToCelsius = function(Fahrenheit) {
  let Celsius= Math.round(((Fahrenheit - 32 ) * 5/9)*10 )/10; 
  return Celsius;
};

const convertToFahrenheit = function(Celsius) {
  
  let Fahrenheit= Math.round(((Celsius * 9/5)+32)*10) /10;
  return Fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
