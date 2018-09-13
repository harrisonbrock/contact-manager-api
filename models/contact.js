const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
	firstName: {
		type: String,
		require: true
	},
	lastName: {
		type: String,
		require: true
	},
	email: {
		type: String
	},
	phoneNumber: {
		type: String
	},
	title: {
		type: String
	},
	company: {
		companyName: {
			type: String
		}
	}
});
models.exports = Contact = mongoose.model('contacts', ContactSchema);