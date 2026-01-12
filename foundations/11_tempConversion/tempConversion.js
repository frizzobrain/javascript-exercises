const convertToCelsius = function(fahrenheit) {
console.log(Math.round((fahrenheit-32)*5/9*10)/10);
  return Math.round((fahrenheit-32)*5/9*10)/10;
};

const convertToFahrenheit = function(celsius) {
  console.log(Math.round((celsius*9/5+32)*10)/10);
  return Math.round((celsius*9/5+32)*10)/10;
  
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
