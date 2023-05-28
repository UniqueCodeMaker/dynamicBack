const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: String,
  password: String
}, { collection: 'auth_user' });

const auth_user = mongoose.models.auth_user || mongoose.model('auth_user', userSchema);

module.exports = auth_user;