require('dotenv').config()
const express = require('express')
const subscriberRoutes = require('./src/app')
const mongoose = require('mongoose')
const app = express();
const port = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL

// Parse JSON bodies (as sent by API clients)
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
  });
// app.use(express.urlencoded({ extended: false }));
app.use('/',subscriberRoutes)

// Connect to DATABASE
mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('connected to database'))


// Start Server
app.listen(port, () => console.log(`App listening on port ${port}!`))
