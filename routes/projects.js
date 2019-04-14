const express = require('express');
const router = express.Router();
const Project = require('../models/projects');
router.get('/', (request, response) => {
    Project.find({}, (err,data) => {
        if(err) {
            response.json(err);
        } else {
            response.json(data);
        }
    });
});

router.get('/:id', (request,response) => {
    Project.findById(request.params.id, (err,data) => { //urlden gelen değeri getiriyor
        if(err) {
            response.json(err);
        } else {
            response.json(data);
        }
    });
});

router.post('/', (request,response) => {
    const projectModel = new Project(request.body);
    projectModel.save().then(() => {
        response.json('Saved successfull');
    });
});

router.put('/:id', (request,response) => {
    Project.findByIdAndUpdate(request.params.id,request.body,{new: true}, (err, data)=> {
        if(err) {
            response.json(err);
        } else {
            response.json(data);
        }
    })
});

router.delete('/:id', (request, response) => {
    Project.findByIdAndDelete(request.params.id,(err,data) => {
        if(err) {
            response.json(err);
        } else {
            response.json(data);
        }
    });
});

router.get('/projects/:id', (req,res) => {
    Project.find({studentId: req.params.id}, (err,data) => {
        if(err) {
            res.json(err);
        } else {
            res.json(data);
        }
    });
});

module.exports = router;