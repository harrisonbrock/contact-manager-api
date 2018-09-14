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


// Get All Contact
router.get('/', asyncHandler(async (req, res, next) => {

	const contacts = await Contact.find();
	res.send(contacts);


}));

// Get By Id
router.get('/:id', asyncHandler(async (req, res, next) => {

	const contact = await Contact.findById(req.params.id);
	if (contact) {
		res.send(contact)
	} else {
		res.send(`No Contact found by Id: ${req.params.id}`)
	}

}));

router.get('/test', asyncHandler(async (req, res, next) => {
	res.send('testing contact');

}));


module.exports = router;
