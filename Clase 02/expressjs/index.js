'use strict';
let express = require('express');
let app = express();

function uno (){
    function dos(){
        var asd2 = 2;
    }
    var mivariable = 1;
    console.log(mivariable);//si
    console.log(asd2); //undefined
}

console.log(mivariable); // mivariable is not defined