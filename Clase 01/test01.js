var startup = (function () {
    function startup() {
        var _this = this;
        this.templateTest2 = function (name) {
            var ret = "Hola " + name;
            _this.templateTest(name);
            var ts = [1, 2, 3];
            ts.forEach(function (algo) {
                console.log(algo);
            });
            return ret;
        };
    }
    startup.main = function () {
        console.log('Hello World');
        return 0;
    };
    startup.prototype.templateTest = function (name) {
        var ret = "Hola " + name;
        return ret;
    };
    return startup;
}());
startup.main();
var test = new startup();
console.log(test.templateTest2('JAB'));
console.log(test.templateTest('JAB'));
//# sourceMappingURL=test01.js.map