const mongoose = require('mongoose');
// Dynamic Schema
const homeSchema =  new mongoose.Schema({
    url: {type: String, required: false},
    description: {type: String, required: false},
    meta_tag: {type: String, required: false},
    upload_image: {type: String, required: false},
    title: {type: String, required: false},

}, { collection: 'home' })

const home =  mongoose.model('home', homeSchema, "home");

module.exports = home;