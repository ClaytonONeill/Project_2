
// DEPENDENCIES
// ====================

const express = require('express');
const mongoose = require('mongoose')
const app = express();
require('dotenv').config();
const methodOverride = require('method-override');


// MIDDLEWARE
// ====================

app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));


const db = mongoose.connection;
const dbupdateobject = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
};

// Connect to Mongo
mongoose.connect(process.env.DATABASE_URL, dbupdateobject);
// Connection Error/Success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', process.env.DATABASE_URL));
db.on('disconnected', () => console.log('mongo disconnected'));
db.on('open', () => {
    console.log('Connection made!');
});


// CONTROLLERS
// ====================

const beerController = require('./controllers/beer.js');
app.use('/The-Beer-Cellar', beerController);





// HOMEROUTE
// ====================

app.get('/', (req, res) => {
  res.render('home.ejs')
})


// CONNECTIONS
// ====================

app.listen(process.env.PORT, () => {
  console.log(`I am listening port ${process.env.PORT}`);
})
