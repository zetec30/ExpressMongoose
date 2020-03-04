var express = require('express');

var app = express();
var mongoose =  require('mongoose');

mongoose.connect('mongodb://localhost:27017/test').then(()=>{
    console.log('connected to db');
})
.catch(err =>{
    console.log('not connected to db');
})



app.get('/', (req, res)=>{
    res.send('this is the home page')

});

app.get('/about', (req, res)=>{
    res.send('this is the about')

});
//listening port 3000
app.listen(3000, ()=>{
console.log('server listening on port 3000');
})

