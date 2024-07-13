const User = require("../../models/Users");

const getUser = async (req, res) => {
    const { document } = req.query

    try {

        const user = await User.findOne({
            document
        })

        return res.status(200).json(user);

    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Error al traer usuarios' });
    }
};

module.exports = getUser;
