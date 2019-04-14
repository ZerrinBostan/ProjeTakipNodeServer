const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const Student = require('../models/student');
/* GET users listing. */
router.post('/register', function(req, res, next) {
  console.log(req.body);
  const{studentNumber,password,...rest} = req.body;
  bcrypt.hash(password,10, (err, hash) => {
    if(err) return err;
    const newStudent = new Student({
      studentNumber,
      password: hash,
      ...rest
    });
    newStudent.save((err,data) => {
      if(err)  {
        res.json(err) 
      } else {
        res.json(true);
      }
      
    })
  });
});

router.post('/authenticate', function(req,res,next) {
  const studentData = req.body;
  Student.findOne({studentNumber: studentData.studentNumber}, (err,data) => {
    if(err) {
      res.json(err);
    }
    else if(!data)  {
      res.json('Böyle bir kullanıcı yok.')
    }
    else {
      bcrypt.compare(studentData.password,data.password, (err,success) => {
        if(err) {
          res.json(err);
        } else {
          res.json(success);
        }
      });
    }
  });
});
module.exports = router;
