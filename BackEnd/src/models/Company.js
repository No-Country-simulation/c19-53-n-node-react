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
        profileImage: { 
            type: String, 
            default: 'https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg'
        },
        bankName: { 
            type: String, 
        },
        bankAccountNumber: { 
            type: String, 
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
        },
        companyId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Company',
            required: true
        }
    }]
});

const Company = mongoose.model('Company', companySchema);
module.exports = Company;
