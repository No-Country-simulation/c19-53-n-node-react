const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    legalDocument: { 
        type: String, 
        required: true 
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
    employees: [{
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
            enum: ['empleado'],
            required: true 
        }
    }]
});

const Company = mongoose.model('Company', companySchema);
module.exports = Company;
