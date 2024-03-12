import express from 'express';
import connectDB from './src/database/conexion.js';
import clienteRoutes from "./src/routers/mt.cliente.router.js";
import articulosRoutes from "./src/routers/mt.articulo.router.js"
import interesRoutes from "./src/routers/mt.interes.router.js"
import alquilerRoutes from "./src/routers/mt.alquiler.router.js"
import bodyParser from 'body-parser';
import validator from "./src/routers/mt.validator.router.js"
import dotenv from 'dotenv';

const app = express();
dotenv.config();
connectDB();

app.get('/', (req, res) => {
  res.send("Hola mundo");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))


app.use('/mt/usuario',validator);
app.use('/mt/clientes', clienteRoutes);
app.use('/mt/articulos', articulosRoutes);
app.use('/mt/interes', interesRoutes);
app.use('/mt/alquiler', alquilerRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
