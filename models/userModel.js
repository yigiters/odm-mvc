const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  // Diğer kullanıcı alanları
});

module.exports = mongoose.model('User', userSchema);
