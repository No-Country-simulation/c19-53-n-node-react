const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    tipo: { 
        type: String, 
        enum: ['depósito', 'retiro', 'transferencia'], 
        required: true 
    },
    monto: { 
        type: Number, 
        required: true 
    },
    fecha: { 
        type: Date, 
        default: Date.now 
    },
    usuarioEmisor: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Company',
        required: true 
    },
    usuarioReceptor: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true
    }
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
