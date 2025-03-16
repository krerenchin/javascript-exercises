const convertToCelsius = function(degree) {

var celDegree = ((degree - 32) * 0.5555555)
var celRounded = Math.round(celDegree * 10) / 10
// var celFfixed = rounded.toFixed(1)

return celRounded
};

const convertToFahrenheit = function(degree) {

  
var fahDegree = (degree * 1.8 + 32)
var fahRounded = Math.round(fahDegree * 10) / 10
// var fahFixed = rounded.toFixed(1)
return fahRounded

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
