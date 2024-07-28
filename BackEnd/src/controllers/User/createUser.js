const Users = require("../../models/Users")
const bcrypt = require("bcrypt")

const createUser = async (req, res) => {
    const {name, email, password, document, role } = req.body
    try {

        const existingUserEmail = await Users.findOne( {email} )

        if(existingUserEmail){
            return res.status(400).json({ message: 'El email ya fue registrado'})
        }

        const existingUserDocument = await Users.findOne( {document} )

        if(existingUserDocument){
            return res.status(400).json({ message: 'El documento ya fue registrado'})
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = await Users.create({
            name,
            email,
            password: hashedPassword,
            document,
            role,
            company
        });

        await newUser.save()

        return res.status(201).json({
            name : newUser.name,
            email : newUser.email,
            role: newUser.role,
            company: newUser.company
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear usuario' , details:error.message});
    }
}
module.exports = createUser