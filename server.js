const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const asyncHandler = require('express-async-handler');
const contacts = require('./routes/contactAPI');
dotenv.config();

const url = process.env.MONGOLAB_URI;
mongoose.connect(url)
	.then(() => console.log('connected'))
	.catch(err => console.log(err));
app.use(express.json());

app.use('/api/contact', contacts);
app.get('/testing', asyncHandler(async (req, res, next) => {

	res.send("test");

}));

const port = process.env.PORT || 9000;
app.listen(port, () => {
	console.log('Server Running');
});