const Company = require('../models/Company');

const deleteCompany = async (req, res) => {
    try {
        const deletedCompany = await Company.findByIdAndDelete(req.params.id);
        if (!deletedCompany) {
            return res.status(404).json({ message: 'Company not found' });
        }
        res.status(200).json({ message: 'Company deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = deleteCompany;
