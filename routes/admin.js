const app = require('express');
const router = app.Router();
const bcrypt = require('bcryptjs');

const Admin = require('../models/admin');

router.post('/register', function(req, res, next) {
    const{userName,password,...rest} = req.body;
    bcrypt.hash(password,10, (err, hash) => {
      if(err) return err;
      const newAdmin = new Admin({
        userName,
        password: hash,
        ...rest
      });
      newAdmin.save((err,data) => {
        if(err)  {
          res.json(err) 
        } else {
          res.json(data._id);
        }
        
      })
    });
  });
  router.post('/authenticate', function(req,res,next) {
    const adminData = req.body;
    Admin.findOne({userName: adminData.userName}, (err,data) => {
      if(err) {
        res.json(err);
      }
      else if(!data)  {
        res.json('Böyle bir kullanıcı yok.')
      }
      else {
        bcrypt.compare(adminData.password,data.password, (err,success) => {
          if(err) {
            res.json(err);
          } else {
            res.json(data._id);
          }
        });
      }
    });
  });

module.exports= router;