const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const reportModel = new Schema({
      no: Number,
      studentId: Number,
      name: String,
      surname: String,
      revisionNumber: Number,
      date: Date,
      description: String      
});

module.exports = mongoose.model('report',reportModel);