const express = require('express');
const router = express.Router();

const Reports = require('../models/reports');
router.get('/', (request, response) => {
    Reports.find({}, (err,data) => {
        if(err) {
            response.json(err);
        } else {
            response.json(data);
        }
    });
});

router.get('/:id', (request,response) => {
    Reports.findById(request.params.id, (err,data) => { //urlden gelen değeri getiriyor
        if(err) {
            response.json(err);
        } else {
            response.json(data);
        }
    });
});
router.get('/reports/:id', (request,response) => {
    Reports.find({studentId: request.params.id}, (err,data) => { 
        if(err) {
            response.json(err);
        } else {
            response.json(data);
        }
    });
});

router.post('/', (request,response) => {
    const reportModel = new Reports(request.body);
    reportModel.save().then((data) => {
        response.json(data);
    });
});

router.put('/:id', (request,response) => {
    Reports.findByIdAndUpdate(request.params.id,request.body,{new: true}, (err, data)=> {
        if(err) {
            response.json(err);
        } else {
            response.json(data);
        }
    })
});

router.delete('/:id', (request, response) => {
    Reports.findByIdAndDelete(request.params.id,(err,data) => {
        if(err) {
            response.json(err);
        } else {
            response.json(data);
        }
    });
});

module.exports = router;
