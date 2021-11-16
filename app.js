const express = require('express');
const mongoose = require('mongoose');
const app = express();


// Db Connection


// Middlewares
app.use(express.json());
app.use(express.static('public'));

// Template Engine
app.set('view engine', 'ejs');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
