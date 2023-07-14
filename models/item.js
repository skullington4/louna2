const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    title: {type: String},
    description: {type: String},
    files: {type: String}
    
}, {
  timestamps: true
});

module.exports = mongoose.model('Item', itemSchema);