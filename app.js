const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const app = express();
const mentorRoute = require('./routes/mentorRoute');
const userRoute = require('./routes/userRoute');

dbURL =
  'mongodb+srv://tansel:11terimGS@mentorcluster.mmt48.mongodb.net/mentorProgramDB?retryWrites=true&w=majority';

// Db connection
mongoose
  .connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Db Connected Successfully');
  })
  .catch((err) => {
    console.log(err);
  });

// Global Variable
global.userIN = null;

// Middlewares
app.use(express.json());
app.use(express.static('./public'));
require('dotenv').config();
app.use(
  session({
    secret: 'sporstmans_can_do_code',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: dbURL }),
  })
);

// Routes
app.use('*', (req, res, next) => {
  userIN = req.session.userID;
  next();
});
app.use('/api/mentors', mentorRoute);
app.use('/api/users', userRoute);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Sunucu port ${port} baslatildi`);
});
