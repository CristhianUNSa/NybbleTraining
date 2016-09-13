const Animal = require('./animal');
module.exports = class Lion extends Animal{
  constructor(name){
    super(name);
  }

  talk(){
    console.log('raaaawwwwrrrrr');
    super.talk();
  }
}