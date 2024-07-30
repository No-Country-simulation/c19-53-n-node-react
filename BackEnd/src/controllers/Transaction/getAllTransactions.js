const Transaction = require('../models/Transaction');

const getAllTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find().populate('usuarioEmisor usuarioReceptor');
        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = getAllTransactions;