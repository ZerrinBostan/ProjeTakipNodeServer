const express = require('express');
const router = express.Router();

const Notes = require('../models/notes');

router.post('/', (req,res) => {
    const noteModel = new Notes(req.body);
    noteModel.save().then((data) => {
        res.json(data);
    });
});
router.get('/', (req,res) => {
    Notes.find({}, (err,data) => {
        if(err) {
            res.json(err);
        } else {
            res.json(data);
        }
    });
});
router.put('/:id', (req,res) => {
    Notes.findByIdAndUpdate(req.params.id,req.body,{new: true}, (err,data) => {
        if(err) {
            res.json(err);
        } else {
            res.json(data);
        }
    });
});
router.get('/:id', (req,res) => {
    Notes.findById(req.params.id, (err,data) => {
        if(err) {
            res.json(err);
        } else {
            res.json(data);
        }
    });
});
module.exports = router;