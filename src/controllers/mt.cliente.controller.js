import Cliente from "../models/mt.cliente.model.js";

export const listarCliente = async (req, res) => {
  try {
    const clientes = await Cliente.find();
    
    if (clientes.length > 0) {
      return res.status(200).json(clientes);
    } else {
      return res.status(404).json({ message: "No se encontraron clientes" });
    }
  } catch (error) {
    console.error('Error al listar clientes:', error);
    return res.status(500).json({ error: "Error al listar clientes" });
  }
};

export const registrarCliente = async (req, res) => {
  try {
    const nuevoCliente = new Cliente({
      identificacion: req.body.identificacion,
      nombres: req.body.nombres,
      direccion: req.body.direccion,
      telefono: req.body.telefono,
      fecha_nac: req.body.fecha_nac,
      password: req.body.password,
    });

    const clienteGuardado = await nuevoCliente.save();

    return res.status(201).json({ message: 'Cliente registrado exitosamente' });

  } catch (error) {
    console.error('Error al registrar cliente:', error);
    return res.status(500).json({ error: "Error al registrar cliente" });
  }
};


export const actualizarCliente = async (req, res) => {
  try {
    const id = req.params.id;
    const datosActualizados = req.body;

    const resultado = await Cliente.updateOne({ _id: id }, { $set: datosActualizados }).lean();


      return res.status(200).json({ message: "Cliente actualizado" });


  } catch (error) {
    console.error('Error al actualizar cliente:', error);
    return res.status(500).json({ error: "Error al actualizar cliente" });
  }
};





export const eliminarCliente = async (req, res) => {
  try {
    const id = req.params.id;

    const resultado = await Cliente.deleteOne({ _id: id });

    if (resultado.deletedCount > 0) {

      return res.status(200).json({ message: "Cliente eliminado" });
    } else {

      return res.status(404).json({ message: "No se encontró el cliente" });
    }

  } catch (error) {
    console.error('Error al eliminar cliente:', error);
    return res.status(500).json({ error: "Error al eliminar cliente" });
  }
};
