const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectModel = new Schema({
    no: Number,
    studentId: String,
    studies: String,
    title: String,
    teacher: String,
    owner: String,
    time: String,
    start_time: Date,
    end_time: Date,
    definition: String,
    budget: String
});

module.exports = mongoose.model('project',projectModel);
