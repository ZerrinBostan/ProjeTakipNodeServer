const express = require('express');
const router = express.Router();

const Settings = require('../models/settings');

router.post('/', (req,res) => {
    const settingsModel = new Settings(req.body);
    settingsModel.save().then((data) => {
        res.json(data._id);
    });
});

router.get('/', (req,res) => {
    Settings.find({}, (err,data) => {
        if(err) {
            res.json(err);
        } else {
            res.json(data);
        }
    });
});
router.get('/:id', (req,res) => {
    Settings.findById(req.params.id, (err,data) => {
        if(err) {
            res.json(err);
        } else {
            res.json(data);
        }
    });
});

router.put('/:id', (req,res) => {
    Settings.findByIdAndUpdate(req.params.id,req.body,{new: true}, (err, data)=> {
        if(err) {
            res.json(err);
        } else {
            res.json(data._id);
        }
    });
});

module.exports = router;