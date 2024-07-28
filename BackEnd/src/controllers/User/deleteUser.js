const UserModel = require("../../models/Users");

const deleteUser = async (req, res) => {
   
    const { id } = req.params;

    try {
        const deletedUser = await UserModel.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        return res.status(200).json({ message: 'Usuario eliminado exitosamente' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error al eliminar usuario', details: error.message });
    }
};

module.exports = deleteUser