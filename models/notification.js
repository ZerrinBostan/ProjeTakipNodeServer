const mongoose = require('mongoose')
      Schema = mongoose.Schema;
const notification = new Schema({
    icon: String,
    message: String
});
module.exports = mongoose.model('Notification', notification);