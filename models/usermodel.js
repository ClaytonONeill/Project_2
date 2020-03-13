const mongoose = require('mongoose');





const newUser = new mongoose.Schema(
  {
    username: {type: String, required: true},
    password: {type: String, required: true}
  }
)


const User = mongoose.model('User', newUser);

module.exports = User;
