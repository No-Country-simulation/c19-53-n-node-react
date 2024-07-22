const User = require("../../models/Users");
const { compare } = require("../../utils/bcrypt");

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Faltan datos" });
        }

        const user = await User.findOne({
            email
        });

        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        const response = await compare(password, user.password);
        
        // const userData = {
        //     id: user.id,
        //     name: user.name,
        // } 

        // if(user.ban) {
        //     return res.status(403).json({ message: "Usuario baneado" });
        // }
        
        if (!response) {
            return res.status(401).json({ message: "Contraseña incorrecta" });
        }


        // const token = jsonSign(userData, JWT_SECRET_KEY, { expiresIn : "5h"});
        // Reemplaza el token del usuario en el objeto user
        // return res.status(200).json({user, token});

        return res.status(200).json({ message :"contraseña correcta"});
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
}

module.exports = login;