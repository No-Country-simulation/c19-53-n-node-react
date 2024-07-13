const Users = require("../../models/Users")
const bcrypt = require("bcrypt")

const postUser = async (req, res) => {
    const {name, email, password, document } = req.body
    try {

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = await Users.create({
            name,
            email,
            document,
            password: hashedPassword
        });

        await newUser.save()

        return res.status(201).json({
            name : newUser.name,
            email : newUser.email,
        });

    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Error al crear usuario' });
    }
}
module.exports = postUser