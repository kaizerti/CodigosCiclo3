const express = require('express');
const cors = require('cors');

const models=require('./models');


const app=express();
app.use(cors());

let cliente=models.Cliente;
let itemdacompra=models.Itemdacompra;
let compra=models.Compra;
let produto=models.Produto;


app.get('/produto', async(req,res) =>{
    await produto.create({
        nome: "JAVA",
        descricao: "Linguagem de programação",
        createAt: new Date(),
        updateAt: new Date() 
    });
    res.send('Serviço criado com êxito!');
});

app.get('/clientes', function(req, res){
    res.send('Seja bem-vindo(a) a The Best TI.')
});

let port=process.env.PORT || 3001

app.listen(port,(req,res)=>{
    console.log('Servidor ativo: http://localhost:3001');
})