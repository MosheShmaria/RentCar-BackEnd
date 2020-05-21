const express= require('express');
const cors= require('cors');
const mongoose= require('mongoose');
require('dotenv').config();


  const app=express();
  const port = process.env.PORT || 2000;


  app.use(cors());
  app.use(express.json());

const uri =process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUriParser: true, useCreateIndex: true });
 
const connection=mongoose.connection;
connection.once('open',()=>{
    console.log("MongoDB database connection established sucesssfully")
});


const carsRouter= require('./routes/cars');

// const datsRouter = require('./routes/dats');

app.use('/cars',carsRouter);
// app.use('/dats',datsRouter);

  app.listen(port, () => {
      console.log(`server is running on port : ${port}`)
  });