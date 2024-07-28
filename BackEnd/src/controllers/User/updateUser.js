const UserModel = require("../../models/Users");
const bcrypt = require("bcrypt");

const updateUser = async (req, res) => {
  const userId = req.params.id;
  const userToUpdate = req.body;

  try {

    // Si se cambia la contraseña se vuelve hashear
    if (userToUpdate.password) {
      const hashedPassword = await bcrypt.hash(userToUpdate.password, 10);
      userToUpdate.password = hashedPassword;
    }

    const userUpdated = await UserModel.findByIdAndUpdate(userId, userToUpdate, {
      new: true,
      runValidators: true, // ejecuta los validadores definidos en el modelo
    });

    if (!userUpdated) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    res.status(200).json({ message: "Usuario modificado exitosamente"});

  } catch (error) {

    if (error.code === 11000) { // codigo para duplicados en MongoDB
      return res.status(400).json({ message: "El email o documento ya fueron ingresados en otro usuario" });
    }
    console.error(error);
    res.status(500).json({ message: "Error al actualizar usuario", details: error.message });
  }
};

module.exports = updateUser;
