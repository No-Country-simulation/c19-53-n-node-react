const User = require("../../models/User");

const getUserByDocument = async (req, res) => {
    const { document } = req.params

    try {

        const user = await User.findOne({
            document
        })

        if(!user){
            return res.status(404).json({error: 'Usuario no encontrado'});
        }

        return res.status(200).json(user);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al recuperar usuarios' , details: error.message });
    }
};

module.exports = getUserByDocument;
