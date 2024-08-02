const UserModel = require("../../models/User")
const CompanyModel = require('../../models/Company');
const TransactionModel = require('../../models/Transaction');

const createTransaction = async (req, res) => {
    const { emisorId, receptorId } = req.params;
    const { monto } = req.body;

    try {
        const company = await CompanyModel.findById(emisorId);
        if (!company) {
            return res.status(404).json({ message: 'Compañia no encontrada para realizar transaccion' });
        }

        if (company.balance < monto) {
            return res.status(400).json({message: 'Fondos insuficientes para realizar la transacción'})
        }

        const usuarioReceptor = await UserModel.findById(receptorId);
        if (!usuarioReceptor) {
            return res.status(404).json({ message: 'Usuario no encontrado para realizar transaccion' });
        }

        const transaction = new TransactionModel({
            monto,
            emisor: company._id,
            receptor: usuarioReceptor._id
        });

        company.balance -= monto;
        await company.save()

        await transaction.save();

        res.status(201).json(transaction);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear transaccion', details: error.message });
    }
};

module.exports = createTransaction;
