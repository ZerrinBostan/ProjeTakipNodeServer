const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notesModel = new Schema({
    studentId: mongoose.SchemaTypes.ObjectId,
    notes: [{
        weekNumber: Number,
        note: Number
    }],
    vize: Number,
    final: Number,
    vizeQuiz: Number,
    finalQuiz: Number
});
module.exports = mongoose.model('Notes', notesModel);