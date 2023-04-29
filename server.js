const express = require('express');
const fetch = require('node-fetch');

const app = express();

app.get('/api/:resource', async (req, res) => {
	const { resource } = req.params;
	const url = `https://swapi.dev/api/${resource}/?format=json`;

	try {
		const response = await fetch(url);
		const data = await response.json();
		res.json(data.results);
	} catch (error) {
		console.error(error);
		res.status(500).send('Something went wrong');
	}
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});
