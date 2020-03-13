const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const User = require('../models/usermodel.js');

router.get('/new', (req, res) => {
  res.render('Session/new.ejs')
})

router.post('/', (req, res) => {
  User.findOne({username: req.body.username}, (error, foundUser) => {
    if (foundUser === null){
      res.redirect('/session/new')
    } else {
      const passMatch = bcrypt.compareSync(req.body.password, foundUser.password);
      if (passMatch) {
        req.session.user = foundUser;
        res.redirect('/The-Beer-Cellar')
      } else {
        res.redirect('session/new')
      }
    }
  })
})

module.exports = router;
