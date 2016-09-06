class startup{
    public static main(): number{
        console.log('Hello World');
        return 0;
    }
    public templateTest(name: string): string{
        let ret:string = `Hola ${name}`;
        return ret;
    }
}
startup.main();

let test : startup = new startup();
console.log(test.templateTest('JAB'));