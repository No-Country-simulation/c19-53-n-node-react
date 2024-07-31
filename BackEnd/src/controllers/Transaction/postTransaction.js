const postTransaction = async (req, res) => {
    const { monto, usuarioEmisor, usuarioReceptor } = req.body;

    const newTransaction = new Transaction({
        monto,
        usuarioEmisor,
        usuarioReceptor
    });

    try {
        const savedTransaction = await newTransaction.save();
        res.status(201).json(savedTransaction);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = postTransaction;