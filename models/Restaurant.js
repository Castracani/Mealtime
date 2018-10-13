const mongoose = require('mongoose');
let dummy = require('mongoose-dummy');
const Schema = mongoose.Schema;

const Restaurant = new Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  address: { type: String, required: true },
  price: { type: Number, min: 1, max: 4, required: true },
  cuisine: { type: String, required: true },
  dine_in: { type: Boolean, required: true },
  to_go: { type: Boolean, required: true },
  //image stuff going here???
});

let model = mongoose.model('Restaurant', Restaurant);
let testObject = dummy(model);
console.log(testObject);

module.exports = mongoose.model('Restaurant', Restaurant);

