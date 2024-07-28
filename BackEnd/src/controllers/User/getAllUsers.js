const UserModel = require("../../models/User");

const getAllUsers = async (req, res) => {
    try {

        const users = await UserModel.find();

        if (users.length === 0) {
            return res.status(404).json({ message: 'No se encontraron usuarios' });
        }
        
        return res.status(200).json(users);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener usuarios', details: error.message });
    }
}
module.exports = getAllUsers;
