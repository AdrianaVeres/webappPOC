var express=require('express');
var app=express();

app.get('/', function(req,res) {
    res.send('Hello world frontend');
});
app.use('/webapp',express.static('webapp'));
app.listen(3001, function() {
   console.log('Server started on port 3001!');
   });
   