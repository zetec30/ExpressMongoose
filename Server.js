var express = require('express');

var app = express();

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

