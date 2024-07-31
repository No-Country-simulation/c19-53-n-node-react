const CompanyModel = require("../../models/Company");
const { compare } = require("../../utils/bcrypt");
const jwt = require("jsonwebtoken")
const {JWT_SECRET_KEY} = process.env

const companylogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Faltan datos" });
        }

        const company = await CompanyModel.findOne({
            email
        });

        if (!company) {
            return res.status(404).json({ message: "Compañia no encontrada" });
        }

        const response = await compare(password, company.password);
        
        const companyData = {
            id: company.id,
            name: company.name,
        } 

        if (!response) {
            return res.status(401).json({ message: "Contraseña incorrecta", company });
        }


        const token = jwt.sign(companyData, JWT_SECRET_KEY, { expiresIn : "5h"});
        // Reemplaza el token de la compañia en el objeto user
        return res.status(200).json({ message :"contraseña correcta", company, token});

        
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
}

module.exports = companylogin;