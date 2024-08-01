const CompanyModel = require('../../models/Company');

const deleteCompany = async (req, res) => {
    
    try {
        const deletedCompany = await CompanyModel.findByIdAndDelete(req.params.id);
        
        if (!deletedCompany) {
            return res.status(404).json({ error: 'Compañia no encontrado' });
        }
        res.status(200).json({ message: 'Compañia eliminada exitosamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar compañia', details: error.message });
    }
};

module.exports = deleteCompany;
