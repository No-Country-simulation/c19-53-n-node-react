
const getUsers = async (req, res) => {
    try {
        
        return res.status(200).json({message: "Hola"});

    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Error al traer usuarios' });
    }
};

module.exports = getUsers;
