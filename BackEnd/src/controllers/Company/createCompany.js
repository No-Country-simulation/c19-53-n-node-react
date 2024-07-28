const CompanyModel = require('../../models/Company');
const bcrypt = require("bcrypt")

const createCompany = async (req, res) => {
    const { name, legalDocument, email, password} = req.body;
    try {

        const existingCompanyEmail = await CompanyModel.findOne( {email} )

        if(existingCompanyEmail){
            return res.status(400).json({ message: 'El email ya fue registrado'})
        }

        const existingCompanyDocument = await CompanyModel.findOne( {legalDocument} )

        if(existingCompanyDocument){
            return res.status(400).json({ message: 'El documento ya fue registrado'})
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newCompany = await CompanyModel.create({
            name,
            email,
            legalDocument,
            password: hashedPassword,
        });

        await newCompany.save()

        return res.status(201).json({
            name : newCompany.name,
            email : newCompany.email,
            legalDocument: newCompany.legalDocument,
        });

    } catch (error) {
        res.status(500).json({ error: 'Error al crear compañia' , details:error.message});
    }
};

module.exports = createCompany;
