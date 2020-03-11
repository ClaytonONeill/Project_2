const express = require('express');
const mongoose = require('mongoose')
const app = express();
require('dotenv').config();

const db = mongoose.connection;
const dbupdateobject = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
};

console.log(process.env.DATABASE_URL);

// Connect to Mongo
mongoose.connect(process.env.DATABASE_URL, dbupdateobject);
// Connection Error/Success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', process.env.DATABASE_URL));
db.on('disconnected', () => console.log('mongo disconnected'));
db.on('open', () => {
    console.log('Connection made!');
});



app.get('/', (req, res) => {
  res.send('You app is up')
})



app.listen(process.env.PORT, () => {
  console.log(`I am listening port ${process.env.PORT}`);
})
