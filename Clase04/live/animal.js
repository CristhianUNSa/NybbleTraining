module.exports = class Animal{
  constructor(name){
    this.name = name;
  }

  talk(){
    console.log(`my name is ${this.name}`);
  }
}