import {Router} from "express"
import { listarCliente, registrarCliente, actualizarCliente, eliminarCliente } from "../controllers/mt.cliente.controller.js"
import { validarToken } from "../controllers/mt.validator.controller.js"

const route = Router()

route.get('/listar', validarToken, listarCliente)
route.post('/registrar',validarToken, registrarCliente)
route.put('/actualizar/:id',validarToken, actualizarCliente)
route.delete('/eliminar/:id',validarToken, eliminarCliente)

export default route;