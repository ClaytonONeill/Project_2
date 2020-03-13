const express = require('express');
const router = express.Router();
const Beer = require('../models/beermodel.js');


router.get('/:id', (req,res) => {
  Beer.findById(req.params.id, (error, foundBeer) => {
    res.render('BeerMain/show.ejs',
    {
      thisBeer: foundBeer
    })
  })
})


router.delete('/:id', (req,res) => {
  Beer.findByIdAndRemove(req.params.id, (error,removedEntry) => {
    res.redirect('/The-Beer-Cellar')
  })
})


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
