'use strict';
module.exports = class Calculator {
    constructor() {

    }
    _sum(a, b) {
      return a + b;
    }
    sumThreeNumbers(c, d, e){
        let sumcd = this._sum(c,d);
        let sumTotal = this._sum(sumcd, e);
        return sumTotal;
    }
};
