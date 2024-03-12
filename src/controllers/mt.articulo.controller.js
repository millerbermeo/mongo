import Articulo from "../models/mt.articulo.model.js"


export const registrarArticulo = async (req, res) => {

    try {
        const nuevoArticulo = new Articulo({
            idArticulo: req.body.idArticulo,
            nombre: req.body.nombre,
            tipo: req.body.tipo
        })
    
        const articuloGuardado = await nuevoArticulo.save();
    
        return res.status(201).json({"message": "articulo registrado con exito"});
    } catch (error) {
        console.error('Error al registrar articulo:', error);
        return res.status(500).json({ error: "Error al registrar articulo" });
      }
}



// falta el de actualizar



export const actualizarArticulo = async (req, res) => {
  try {
      const id = req.params.id;
      const datosActualizados = req.body;

      const resultado = await Articulo.updateOne({ _id: id }, { $set: datosActualizados });


          return res.status(200).json({ message: "Artículo actualizado" });

  } catch (error) {
      console.error('Error al actualizar artículo:', error);
      return res.status(500).json({ error: "Error al actualizar artículo" });
  }
};


