const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
const dummy = require('mongoose-dummy');

const User = new Schema({
	firstname: { type: String, required: true, min: 1, max: 25, },
	lastname: { type: String, required: true, min: 1, max: 25 },
	password: { type: String, required: true, min: 3 },
	total_sessions: { type: Number, required: true },
	next_clicks: { type: Number, default: 0 },
	find_clicks: { type: Number, default: 0 }
});
//passport-local-mongoose creates a 'username' and some 'password' fields for you
//you can add some other fields here too if you like

User.plugin(passportLocalMongoose);

let model = mongoose.model('User', User);
let testObject = dummy(model);
console.log(testObject);

module.exports = mongoose.model('User', User);