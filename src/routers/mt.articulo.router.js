import {Router} from "express"

import { registrarArticulo, actualizarArticulo } from "../controllers/mt.articulo.controller.js"
import { validarToken } from "../controllers/mt.validator.controller.js"

const route = Router()

route.post('/registrar', validarToken, registrarArticulo)
route.put('/actualizar/:id', validarToken, actualizarArticulo)


export default route;