const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./db/connect');
const app = express();
const mentorRoute = require('./routes/mentorRoute');
const userRoute = require('./routes/userRoute');

// Middlewares
app.use(express.json());
app.use(express.static('./public'));
require('dotenv').config();

// Routes
app.use('/api/mentors', mentorRoute);
app.use('/api/users', userRoute);

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
