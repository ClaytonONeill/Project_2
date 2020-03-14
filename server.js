
// DEPENDENCIES
// ====================

const express = require('express');
const mongoose = require('mongoose')
const app = express();
require('dotenv').config();
const methodOverride = require('method-override');
const expressSession = require('express-session')


// MIDDLEWARE
// ====================

app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(express.static('public'))
app.use(expressSession({
  secret: 'fannymybones',
  resave: false,
  saveUninitialized: false
}))



// CONTROLLERS
// ====================

const beerController = require('./controllers/beer.js');
app.use('/The-Beer-Cellar', beerController);

const userController = require('./controllers/user.js');
app.use('/users', userController);

const sessionController = require('./controllers/session.js')
app.use('/session', sessionController)

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
