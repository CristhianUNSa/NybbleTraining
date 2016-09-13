let callbacks = [];
for (let i = 0; i < 2; i++){
  callbacks[i] = function(){
    console.log(i);
  }
}

callbacks[0]();
callbacks[1]();