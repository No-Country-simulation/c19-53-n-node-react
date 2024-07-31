const CompanyModel = require('../../models/Company');
const bcrypt = require("bcrypt");

const updateCompany = async (req, res) => {
    const CompanyId = req.params.id;
    const CompanyToUpdate = req.body;

  try {

    if (CompanyToUpdate.password) {
      const hashedPassword = await bcrypt.hash(CompanyToUpdate.password, 10);
      CompanyToUpdate.password = hashedPassword;
    }

    const CompanyUpdated = await CompanyModel.findByIdAndUpdate(CompanyId, CompanyToUpdate, {
      new: true,
      runValidators: true, // ejecuta los validadores definidos en el modelo
    });

    if (!CompanyUpdated) {
      return res.status(404).json({ message: "Compañia no encontrada" });
    }

    res.status(200).json({ message: "Compañia modificado exitosamente"});

  } catch (error) {

    if (error.code === 11000) { // codigo para duplicados en MongoDB
      return res.status(400).json({ message: "El email o legal document ya fueron ingresados en otra compañia" });
    }
    console.error(error);
    res.status(500).json({ message: "Error al actualizar compañia", details: error.message });
  }
};

module.exports = updateCompany;

