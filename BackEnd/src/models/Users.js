const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    document: { 
        type: String, 
        required: true,
        unique: true
    },
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    password: { 
        type: String, 
        required: true 
    },
    role: {
        type: String,
        enum: ['Empleado', 'Empresa', 'Administrador'],
        required: true 
      },
    balance: { 
        type: Number, 
        default: 0 
    },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
