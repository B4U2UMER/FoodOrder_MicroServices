import express from 'express';
 import {AdminRoute, VandorRoute} from './routes'
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
// const mongoose = require('mongoose');
import { MONGO_URI } from './config';


const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:true}))
app.use('/admin', AdminRoute); 
app.use('/vandor', VandorRoute)
 
 
// mongoose.connect(MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   } as ConnectOptions)


mongoose.connect(MONGO_URI).then( result =>{
console.log( "Connected");
    }).catch(err=>console.log("error" + err))
app.listen(8080, ()=>{
    // console.clear();
    console.log('SubhanAllah App listening to the port http://localhost:8080')
})