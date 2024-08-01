const TransactionModel = require('../../models/Transaction');
const UserModel = require('../../models/User');

const getTransactionsByEmployee = async (req, res) => {
    const { employeeId } = req.params;

    try {
        const employee = await UserModel.findById(employeeId);
        if (!employee) {
            return res.status(404).json({ message: 'Empleado no encontrado' });
        }

        const transactions = await TransactionModel.find({ receptor: employeeId });

        res.status(200).json(transactions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener transacciones de un empleado', details: error.message });
    }
};

module.exports = getTransactionsByEmployee;
