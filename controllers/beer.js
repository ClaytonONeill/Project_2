const express = require('express');
const router = express.Router();
const Beer = require('../models/beermodel.js');

router.get('/', (req,res) => {
  res.render('BeerMain/index.ejs')
});






router.get('/new', (req,res) => {
  res.render('BeerMain/new.ejs')
})









router.post('/', (req, res) => {
  Beer.create(req.body, (error, newEntry) => {
    res.redirect('/The-Beer-Cellar')
  })
})


module.exports = router;
