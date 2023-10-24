require('dotenv').config();
//ecomern-f 
//TFnHTB7Qxh
const mongoose = require('mongoose');

// const connectionStr = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PW}@cluster0.yswccyq.mongodb.net/ecomernf?retryWrites=true&w=majority`;
// const connectionStr = `mongodb+srv://hana:<password>@cluster0.qhavupd.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp`;
// const connectionStr = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PW}@cluster0.qhavupd.mongodb.net/ecomernyt?retryWrites=true&w=majority&appName=AtlasApp`;
// mongoose.connect(connectionStr, {useNewUrlparser: true})
const connectionStr = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PW}@cluster0.5tvmqcq.mongodb.net/ecomernyt?retryWrites=true&w=majority`;

mongoose.connect(connectionStr, {useNewUrlparser: true})
.then(() => console.log('connected to mongodb'))
.catch(err => console.log(err))

mongoose.connection.on('error', err => {
  console.log(err)
})