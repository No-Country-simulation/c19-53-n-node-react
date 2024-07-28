const CompanyModel = require('../../models/Company');

const updateCompany = async (req, res) => {
    try {
        const updatedCompany = await CompanyModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedCompany) {
            return res.status(404).json({ message: 'Company not found' });
        }
        res.status(200).json(updatedCompany);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = updateCompany;
