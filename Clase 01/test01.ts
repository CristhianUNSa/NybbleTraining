class startup{
    public static main(): number{
        console.log('Hello World');
        return 0;
    }
    public templateTest(name: string): string{
        let ret:string = `Hola ${name}`;
        return ret;
    }
    public templateTest2 = (name: string):string =>{
        let ret:string = `Hola ${name}`;
        this.templateTest(name);

        let ts:Array<number> = [1,2,3];

        ts.forEach((algo:number)=>{
            console.log(algo);
        });
        return ret;
    }
}
startup.main();

let test : startup = new startup();
console.log(test.templateTest2('JAB'));
console.log(test.templateTest('JAB'));