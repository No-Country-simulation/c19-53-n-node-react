const mongoose = require("mongoose");

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
    profileImage: { 
        type: String, 
        default: 'https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg'
    },
    bankName: { 
        type: String, 
        required: true,
    },
    bankAccountNumber: { 
        type: String, 
        required: true,
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
        required: true 
    },
    companyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
