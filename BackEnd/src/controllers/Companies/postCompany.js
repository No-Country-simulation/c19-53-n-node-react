const Company = require('../models/Company');

const postCompany = async (req, res) => {
    const { name, legalDocument, email, password, employees } = req.body;

    const newCompany = new Company({
        name,
        legalDocument,
        email,
        password,
        employees
    });

    try {
        const savedCompany = await newCompany.save();
        res.status(201).json(savedCompany);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = postCompany;
