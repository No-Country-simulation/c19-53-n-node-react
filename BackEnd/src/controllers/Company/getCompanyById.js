const CompanyModel = require("../../models/Company");

const getCompanyById = async (req, res) => {
  const { id } = req.params;

  try {
    const company = await CompanyModel.findById(id);

    if (!company) {
      return res.status(404).json({ error: "Compañia no encontrada" });
    }

    return res.status(200).json(company);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Error al recuperar compañia", details: error.message });
  }
};

module.exports = getCompanyById;
