const UserModel = require("../../models/User")
const CompanyModel = require('../../models/Company');
const bcrypt = require("bcrypt")

const createUser = async (req, res) => {
    const {name, email, password, document, role, bankAccountNumber, bankName } = req.body
    const { companyId } = req.params;

    try {

        const existingUserEmail = await UserModel.findOne( {email} )

        const company = await CompanyModel.findById(companyId);
        if (!company) {
            return res.status(404).json({ message: 'No existe esa compañia' });
        }

        if(existingUserEmail){
            return res.status(400).json({ message: 'El email ya fue registrado'})
        }

        const existingUserDocument = await UserModel.findOne( {document} )

        if(existingUserDocument){
            return res.status(400).json({ message: 'El documento ya fue registrado'})
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = await UserModel.create({
            name,
            email,
            password: hashedPassword,
            document,
            role,
            companyId,
            bankName,
            bankAccountNumber
        });

        await newUser.save()

        return res.status(201).json({
            name : newUser.name,
            email : newUser.email,
            document: newUser.document,
            role: newUser.role,
            bankName: newUser.bankName,
            bankAccountNumber: bankAccountNumber,
            companyId: newUser.companyId
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear usuario' , details:error.message});
    }
}
module.exports = createUser