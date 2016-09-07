/*jslint node: true */
/* jshint node: true */
'use strict';
let Calculator = require('./calculator.js');
let calc = new Calculator();

console.log('2+3+4');
let sum = calc.sumThreeNumbers(2, 3, 4);
console.log(sum);
