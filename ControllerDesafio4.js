const express = require('express');
const cors = require('cors');

const models=require('./models');


const app=express();
app.use(cors());

let cliente=models.Cliente;
let itemdacompra=models.Itemdacompra;
let compra=models.Compra;
let produto=models.Produto;

import { useEffect } from "react";
import { Container } from "reactstrap";
import { api } from "../../config";
import { Table } from "../../config";
import { Container, Table } from "reactstrap";
import { Container } from "reactstrap";

export const PedidosCliente = (props) => {
    //  console.log (props.match.params.id)
    const [data, setData] = useState([]);
    const [id, setId] = useState(props.match.params.id)

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



useEffect(() => {
    const getPedidos = async () => {
        await axios.get(api = "/cliente/" + id + "/pedido")
            .then((response) => {
                console.log(response.data.pedidos);
                setData(response.data.pedidos);
            })
            .catch(() => {
                console.log("Sem conexão com a API")
            })
    }
    getPedidos();

}, (id));

return (
    <div>
        <Container>
            <div className="d-flex">
                <div className="m-auto p-2">
                    <h1>HOME</h1>
                </div>
                <div className="p-2">
                    <a href="/listar-cliente" className="btn btn-outline-success btn-sm">Cliente</a>
                </div>
                <div className="p-2">
                    <a href="/listar-pedido"
                        className="btn btn-outline-success btn-sm">Pedido</a>
                </div>
                <div className="p-2">
                    <a href="/listar-servico"
                        className="btn btn-outline-success btn-sm">Serviço</a>
                </div>
            </div>

            <Table
            >
                <thead>
                    <tr>
                        <th>
                            ID
                        </th>
                        <th>
                            ClienteID
                        </th>
                        <th>
                            Data
                        </th>
                        <th>
                            Ação
                        </th>
                    </tr>
                </thead>
                <tbody>
                    (date.map(pedidos = {
                    <tr> key(pedidos.id)
                        <th>
                            {pedidos.id}
                        </th>
                        <td>
                            {pedidos.cliente. id}
                        </td>
                        <td>
                            {pedidos.date}
                        </td>
                        <td>
                            <link to = {"/editar-pedido/"+pedidos.id}
                            className = "btn btn-outline-werning btn-sm">
                            
                            </link>
                        </td>
                    </tr>
})

                </tbody>
            </Table>
        </Container>

    </div>

                    )

                }

                export const ListarServico = () => {
                    return (
                        <div>
                            <Container>
                
                                <h1>Visualizar informações do serviço</h1>
                
                                <Table striped>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Nome</th>
                                            <th>Descrição</th>
                                            <th>Ação</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <th>2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th>3</th>
                                            <td colSpan="2">Larry the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                    </tbody>
                
                                </Table>
                            </Container>
                
                
                
                        </div>
                
                
                    );
                };

                export const Home = () => {
                    return (
                        <div>
                            <Container>
                                <div className="d-flex">
                                    <div className="m-auto p-2">
                                        <h1>HOME</h1>
                                    </div>
                                    <div className="p-2">
                                        <a href="/listar-cliente" className="btn btn-outline-success btn-sm">Cliente</a>
                                    </div>
                                    <div className="p-2">
                                        <a href="/listar-pedido"
                                            className="btn btn-outline-success btn-sm">Pedido</a>
                                    </div>
                                    <div className="p-2">
                                        <a href="/listar-servico"
                                            className="btn btn-outline-success btn-sm">Serviço</a>
                                    </div>
                                </div>
                            </Container>
                
                        </div>
                    );
                };






let port=process.env.PORT || 3001

app.listen(port,(req,res)=>{
    console.log('Servidor ativo: http://localhost:3001');
})