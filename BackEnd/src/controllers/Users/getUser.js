const User = require("../../models/Users");

const getUser = async (req, res) => {
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
        res.status(400).json({ error: 'Error al traer usuarios' });
    }
};

module.exports = getUser;
