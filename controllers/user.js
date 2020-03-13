const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const User = require('../models/usermodel.js');

router.get('/new', (req,res) => {
  res.render('User/new.ejs')
})

router.post('/',(req,res) => {
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
  User.create(req.body, (error, newUser) => {
    req.session.user = newUser
    res.redirect('/The-Beer-Cellar')
  })
})


module.exports = router;
