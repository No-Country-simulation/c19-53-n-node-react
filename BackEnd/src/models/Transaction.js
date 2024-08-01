const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    monto: { 
        type: Number, 
        required: true 
    },
    fecha: { 
        type: Date, 
        default: Date.now 
    },
    emisor: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Company',
        required: true 
    },
    receptor: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true
    }
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
