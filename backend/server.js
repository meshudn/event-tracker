/*
  Initialization of server
*/
const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

//middleware and setting return content-type: json
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;

connection.once( 'open', () => {
  console.log("MongoDB database connection established successfully.");
});

//routes
const eventRoute = require("./routes/events");
const userRoute = require("./routes/users");

app.use('/events', eventRoute);
app.use('/users', userRoute);

//Listening port value
app.listen(port, ()=> {
    console.log('server is running at');
});

