const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

//bodyparser middleware
app.use(bodyParser.json());

// DB config
const db =require('./config/keys').mongoURI;

//connect to mongo
mongoose.connect(db,{ useNewUrlParser: true,
    useCreateIndex: true })
.then(()=>console.log('connect...'))
.catch(e=>console.log('cant connect'));

//use routes
app.use('/api/items',require('./routes/api/items'));

const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`server start on port ${port}`));





