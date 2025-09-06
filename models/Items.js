const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  name: String,
  type: String,
  price: Number,
  image: String, 
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
});

module.exports = mongoose.model('Item', ItemSchema);
