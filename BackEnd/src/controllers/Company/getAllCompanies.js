const CompanyModel = require('../../models/Company');

const getAllCompanies = async (req, res) => {
    try {

        const companies = await CompanyModel.find();

        if (companies.length === 0) {
            return res.status(404).json({ message: 'No se encontraron compañias' });
        }

        return res.status(200).json(companies);

    } catch (error) {

        res.status(500).json({error: 'error al obtener compañias',details: error.message });
    }
};

module.exports = getAllCompanies;
