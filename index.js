var StringCalculator = require('./lib/calculator').StringCalculator;
var params = process.argv[2];

console.log(StringCalculator(params));
