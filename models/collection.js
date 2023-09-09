const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const collectionSchema = new Schema({
    title: {type: String},    
}, {
  timestamps: true
});

module.exports = mongoose.model('Collection', collectionSchema);