import {Router} from "express"
import { registrarAlquiler, actualizarAlquiler } from "../controllers/mt.alquiler.controller.js"
import { validarToken } from "../controllers/mt.validator.controller.js"

const route = Router()


route.post('/registrar', validarToken, registrarAlquiler)
route.put('/actualizar/:id', validarToken, actualizarAlquiler)




export default route;