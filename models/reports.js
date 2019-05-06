const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const reportModel = new Schema({
      no: Number,
      studentId: String,
      name: String,
      surname: String,
      revisionNumber: Number,
      date: Date,
      description: String,
      projectId: String  
});

module.exports = mongoose.model('report',reportModel);