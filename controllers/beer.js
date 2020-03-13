const express = require('express');
const router = express.Router();
const Beer = require('../models/beermodel.js');


router.get('/new', (req,res) => {
  res.render('BeerMain/new.ejs')
})





router.get('/', (req,res) => {
  Beer.find({}, (error, beerPosts) => {
    res.render('BeerMain/index.ejs',
    {
      beers: beerPosts
    })
  })
});


router.post('/', (req, res) => {
  Beer.create(req.body, (error, newEntry) => {
    res.redirect('/The-Beer-Cellar')
  })
})


module.exports = router;
