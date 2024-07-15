const bcrypt = require('bcrypt');

const hashPassword = async (password) =>{
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  }


const compare = async (pass, hashedpass) => {
    const res = await bcrypt.compare(pass, hashedpass);
    return res;
  }


module.exports = { hashPassword, compare }