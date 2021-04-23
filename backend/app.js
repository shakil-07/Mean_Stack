const express=require('express');
const app=express();
const mongoose= require('mongoose');
const bodyParser=require('body-parser');
require('dotenv/config');

const cors= require('cors');

//using body-parser as a middleware for all time and 
//it should be written at the begining
app.use(bodyParser.json());

app.use(cors({origin:'http://localhost:4200'}));

//import routes
const fileRoute=require('./router/file');
app.use('/file',fileRoute); 

//connection with mongodb 
mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser: true, useUnifiedTopology: true},()=>{console.log('connected to mongodb!')})
mongoose.connection.on("error", function(error) {
  console.log(error)
})

mongoose.connection.on("open", function() {
  console.log("Connected to MongoDB database.")
})
//listening
app.listen(8084);