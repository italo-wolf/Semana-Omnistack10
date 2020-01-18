const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('../src/routes');
const app = express();
mongoose.connect('mongodb+srv://omnistack:210597@cluster0-yk1mv.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});
app.use(cors());
app.use(express.json());
app.use(routes);



app.listen(3333);




//Metodos Http: get, post, put, delete

//Tipos de parametro:
//Query Params: req.query (Filtros, ordenação, paginação)
//Route Params: req.params (Identificar um recurso na alteração ou remoção)
//Body Params: req.body (Dados para a criação ou alteração de um registro)

//MongoDB (Não-relacional)



