import Alquiler from "../models/mt.alquiler.model.js";


export const registrarAlquiler = async (req, res) => {

    try {
        const nuevoAlquiler = new Alquiler({
            idAlquiler: req.body.idAlquiler,
            valor: req.body.valor,
            fecha: req.body.fecha,
            meses: req.body.meses,
            descripcion: req.body.descripcion,
            interes: req.body.interes,
            cliente: req.body.cliente,
            articulo: req.body.articulo
        })

        const guadarAlquiler = await nuevoAlquiler.save()

        return res.status(200).json({"message" : "alquiler registrado con exito"});
    } catch (error) {
        console.error('Error al registrar alquiler:', error);
        return res.status(500).json({ error: "Error al registrar alquiler" });
    }
}


export const actualizarAlquiler = async (req, res) => {

    try {
        const id = req.params.id

        const datosActualizados = req.body

        const resultado = await Alquiler.updateOne({ idAlquiler: id }, { $set: datosActualizados })

            return res.status(200).json({ message: "alquiler actualizado con exito" });
  
    } catch (error) {
        console.error('Error al actualizar alquiler:', error);
        return res.status(500).json({ error: "Error al actualizar alquiler" });
    }
}


