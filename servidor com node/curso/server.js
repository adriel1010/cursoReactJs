const express = require("express");

const app = express();

//req = tem todos os detalhes da requisição, usuário que ta requsistando, ip....
//res = é a resposta que irá dar para a requisição. 
app.get('/', (req, res) => {
  
  res.send("hellos");
});

app.listen(3222);