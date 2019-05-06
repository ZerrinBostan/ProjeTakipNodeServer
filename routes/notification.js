const express = require('express');
const router = express.Router();

const Notification = require('../models/notification');

router.get('/', (req,res) => {
    Notification.find({}, (err,data) => {
        if(err) {
            res.json(err);
        } else {
            res.json(data);
        }
    });
});

router.post('/', (req,res) => {
    const notification = new Notification(req.body);
    notification.save().then((data) => {
        res.json(data);
    })
});

module.exports = router;