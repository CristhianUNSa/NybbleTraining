var startup = (function () {
    function startup() {
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
console.log(test.templateTest('JAB'));
//# sourceMappingURL=test01.js.map