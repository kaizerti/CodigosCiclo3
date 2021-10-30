const express = require('express');
const cors = require('cors');

const {Sequelize} = require('./models');

const models=require('./models');
const { all } = require('sequelize/types/lib/operators');

const app=express();
app.use(cors());
app.use(express.json());

let cliente = models.Cliente;
let pedido = models.Pedido;
let servico = models.Servico;
let itempedido = models.ItemPedido;

app.get('/', function(req, res){
    res.send('Olá mundo!')
});

//inserir um novo cliente (post)
app.post('/cliente', async(req,res) =>{
    await cliente.create(
        req.body
    ).then(cli =>{
        return res.json({
            error: false,
            message: "Cliente foi inserido com sucesso.",
            cli
        });
    }).catch(erro=> {
        return res.status(400).json({
            error: true,
            messagem: "Não foi possivel inserir o cliente!"
        });
    });
});

//inserir um novo pedido para um cliente existente
app.post('/cliente/:id/pedido', async(req, res)=>{
    const ped = {
        ClienteId: req.params.id, 
        data: req.body.data
    };

    if(!await cliente.findByPk(req, params.id)){
        return res.status(400).json({
            error: true,
            message: "Cliente não existe."
        });
    };

    await pedido.create(ped)
    .then(order => {
        return res.json({
            error: true,
            message:"Pedido inserido com sucesso.",
            order
        });      
        
    }).catch(erro =>{
        return res.status(400).json({
            error: true,
            message: "Não foi possivel inserir o pedido."

        });
    });
});

app.post('/servicos', async(req,res) =>{

    await servico.create(
        req.body
        ).then(function(){
            return res.json({
                error: false,
                message: "Serviço criado com sucesso!"
            })
        }).catch(function(erro){
            return res.status(400).json({
                error: true,
                message: "Foi impossivel se conectar.!"
            })
        });
    });
            
    //exibir todos os clientes 
app.get('clientes', async(req, res)=>{
    await cliente.findAll()
    .then(cli =>{
        return res.json({
            error: false,
            cli
        });
    })
    .catch((erro)=>{
        return res.status(400).json({
        error: true,
        message: "Erro de conexão."
    });
});
})

//exibir todos os clientes com tudo o que ele se relaciona
app.get('/clientes.pedidos', async(req, res)=>{
    await cliente.findAll({include:[{all: true}]})
    .then(cli =>{
        return res.json({
            error: false,
            cli
        });
    })
    .catch((erro)=>{
        return res.status(400).json({
        error: true,
        message: "Erro de conexão."
    });
});
})


//alterar dados do pedido
app.put('/cliente/:id/pedido', async(req, res)=>{

    const ped ={
        ClienteId: req.params.id,
        data: req.body.data

    };
    if (!await cliente.findByPk(req.params.id)){

        return res.status(400).json({
            error: true,
            message: "Cliente não existe."
            
        });
    };
    await pedido.update(ped,{
        where: Sequelize.and((ClienteId: (req, params, id),
        (id: req, body, id)=>}
        ).sthen(pedidos=>{
            return res.json({
                error: false,
                messagem: "Pedido foi alterado com sucesso.",
                pedidos
            });
        }).catch(erro=>{
            return res.status(400).json({

                error: true,
                message: "Erro: não foi possivel alterar."
            });
        });


app.get('/listaservicos', async(req, res)=>{
    await servico.findAll({
       // raw: true
       order: [['nome', 'ASC']]

           }).then(function(servicos){
        res.json({servicos})
    });
});

app.get('/listaclientes', async(req, res)=>{
    await cliente.findAll({
        raw: true
    }).then(function(clientes){
        res.json({clientes})
    });
});
app.get('/listapedidos', async(req, res)=>{

})
app.get('/ofertaservicos', async(req, res)=>{
    await servico.count('id').then(function(servicos){
        res.json({servicos});
    });
});


app.get('/servico/:id', async(req, res)=>{

await servico.findByPk(req.params.id)
.then(serv =>{
    return res.json({
    error: false,
    serv
});


}).catch(function(erro){
    return res.status(400).json({
        erro:true,
        message: "Erro: código não encontrado!"
    });
});

});


app.put('/atualizaservico', async(req, res)=>{
    await servico.update(req, body,{
        where: {id: req.body.id}
         }).then(function() {
            return res.json({
                error:false,
                message: "Serviço foi alterado com sucesso!"
            });
         }).catch(function(erro){
             return res.status(400). json({
                 error:true,
                 message: "Erro na alteração do serviço."
             });
         });
});

    app.get('/pedidos/:id', async(req, res)=>{
        await pedido.findByPk(req, params.id,{include:[{all: true}]})
        .then(ped=>{
            return res.json({ped});
        })
    })


    app.put('/pedidos/:id/editaritem', async(req, res)=>{
        const item={
            quantidade: req.body.quantidade,
            valor: req.body.valor
        };
        if (!await pedido.findByPk(req.params.id)){
            return res.status(400).json({
                error: true, 
                message: 'Pedido não foi encontrado'
            });
        };

        if (!await servico.findByPk(req.body.ServicoId)){
            return res.status(400).json({
                erro:true,
                messagem:'Serviço não foi encontrado.'
            });
        };

         await itempedido.update(item,{
             where: Sequelize.and({ServicoId: req.body.ServicoId},
                {PedidoId: req.params.id})
         }).then(function(itens){
             return res.json({
                 error:false,
                 message:"Pedido foi alterado com sucesso!",
                 itens
             });
         }).catch(function(erro){
             return res.status(400).json({
                 error: true,
                 message:  "Erro não foi possivel alterar."
             });
         });
    });

    app.get('/excluircliente/:id', async(req, res) =>{
        await cliente.destroy({
            where: {id: req.params.id}
            }).then(function(){
                return res.json({
                    error: false,
                    message: "Cliente foi excluido com sucesso!"
                     });                    
            }).catch(function(erro){
                return res. status(400).json({
                    error: true,
                    message: "Erro ao excluir cliente."
                });
            });
    });


    app.get('/excluircliente/:id', async(req, res)=>{
       await  cliente.destroy({
            where:{id: req.params.id}
        }).then(function(){
            return res.json({
                error: false,
                message: "Cliente foi excluído com sucesso!"
            });
        }).catch(function(erro){
            return res.status(400).json({
                error: true,
                messagem: "Erro ao excluir o cliente."
            });
        });
    });


let port=process.env.PORT || 3001;

app.listen(port,(req,res)=>{
    console.log=('Servidor ativo: http://localhost:3001');
})