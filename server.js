const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();


app.get('/',(req,res)=>{
    //res.send('<h1>HELLO GUYS</h1>');
    res.sendFile(__dirname+'/public/index2.html');
    //res.sendFile(path.join(__dirname,'public','index.html'));
})
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

//resume
// app.get('/resume', function(req, res){
//     res.render('/resume.html');
// });

const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`server start on port ${port}`));



