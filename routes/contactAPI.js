const express = require('express');
const asyncHandler = require('express-async-handler');
const Contact = require('../models/contact');
const router = express();

// Create Contact
router.post('/', asyncHandler(async (req, res, next) => {

	const newContact = new Contact({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		phoneNumber: req.body.phoneNumber,
		title: req.body.title,
		companyName: req.body.companyName
	});

	const contact = await newContact.save();

	res.send(contact)

}));

router.get('/test', asyncHandler(async (req, res, next) => {
	res.send('testing contact');

}));


module.exports = router;
