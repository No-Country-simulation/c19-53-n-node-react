const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    legalDocument: { 
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
    balance: { 
        type: Number,
        default: 0 
    }
});

const Company = mongoose.model('Company', companySchema);
module.exports = Company;
