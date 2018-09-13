const express = require('express');
const app = express();
const asyncHandler = require('express-async-handler');

app.use(express.json());

app.get('/testing', asyncHandler(async (req, res, next) => {

	res.send("test");

}));

const port = process.env.PORT || 9000;
app.listen(port, () => {
	console.log('Server Running');
});