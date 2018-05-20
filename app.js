var express=require('express');
var app = express();
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 8080;
// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/',function(req,res){
    res.send("hello, world");
    //__dirname : It will resolve to your project folder.
});

app.listen(PORT, function () {
    console.log('Express app listening on port'+ PORT);
});

