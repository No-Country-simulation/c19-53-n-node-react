const UserModel = require('../../models/User');
const CompanyModel = require('../../models/Company');

async function getEmployeesByCompany(req, res) {
    try {
        const { companyId } = req.params;

        const company = await CompanyModel.findById(companyId);
        if (!company) {
            return res.status(404).json({ message: 'Compañia no encontrada' });
        }

        const employees = await UserModel.find({ companyId});

        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({error: 'Error al obtener empleados por nombre de compañia',details: error.message });
    }
}

module.exports =  getEmployeesByCompany;
