
const mongoose = require('mongoose');
// Dynamic Schema
const DynamicSchema =  new mongoose.Schema({
    slug_url: {type: String, required: true},
    description: {type: String, required: true},
    page_name: {type: String, required: true},
    upload_image: {type: String, required: true},
    category: {type: String, required: true},

}, { collection: 'dynamics' })

const Dynamic = mongoose.models.Dynamic || mongoose.model('Dynamic', DynamicSchema);

module.exports = Dynamic;