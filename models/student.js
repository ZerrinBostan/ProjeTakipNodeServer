const mongoose = require('mongoose')
      Schema = mongoose.Schema;

const studentModel = new Schema({
    identityNumber: Number,
    email: String,
    name: String,
    surname: String,
    phoneNumber:String,
    studentNumber: Number,
    studentClass: String,
    studentClassGroup: String,
    password: String
});

module.exports = mongoose.model('student',studentModel);