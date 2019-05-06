const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const settingsModel = new Schema({
    weekNumber: Number,
    chosenWeek: Number,
    vizePercentage: Number,
    finalPercentage: Number,
    finalWeek: Number
});

module.exports = mongoose.model('Settings', settingsModel);