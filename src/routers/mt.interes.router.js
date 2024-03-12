import {Router} from "express"
import { registrarInteres, eliminarInteres, listarInteresesCliente, listarTotalInteresesPorMesYAnio, listarInteresPendientePorAlquiler } from "../controllers/mt.interes.controller.js"
import { validarToken } from "../controllers/mt.validator.controller.js";
const route = Router()


route.get('/    /:clienteId', validarToken, listarInteresesCliente);

route.get('/total-intereses',validarToken, listarTotalInteresesPorMesYAnio);

route.post('/registrar', validarToken, registrarInteres)

route.delete('/eliminar/:id',validarToken, eliminarInteres)
route.get('/interes-pendiente/:alquilerId',validarToken, listarInteresPendientePorAlquiler);


export default route;