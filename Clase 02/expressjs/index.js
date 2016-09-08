'use strict';
let express = require('express');
let app = express();

app.use((req, res, next)=>{
    console.log('request made');
    next();
});

app.get('/', (req, res) => {
  console.log('Esto es la ruta /');
  res.send('Hello World!');
});

app.post('/', (req, res) => {
  console.log('hicieron un post 2');
  res.send('Bien hiciste un post 2!');
});

app.post('/delay', (req, res) => {
    setTimeout(()=>{
        res.send('respuesta con delay');
    }, 1500);
});

app.get('/json-data', (req, res) => {
    res.send({
        data: 'test'
    });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});