var express=require('express');
var app = express();
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 8080;
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
// app.post('/api/users', function(req, res) {
//     var user_id = req.body.id;
//     var token = req.body.token;
//     var geo = req.body.geo;
//
//     res.send(user_id + ' ' + token + ' ' + geo);
// });

app.get('/',function(req,res){
    res.send("hello, world");
    //__dirname : It will resolve to your project folder.
});
MongoClient.connect(url, function(err, db) {
    app.get('/get_all_bases',function(req,res){
        if (err) throw err;
        var dbo = db.db("police");
        dbo.collection("bases").find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log("Printing all bases");
            console.log(result);
            res.json(result);
            // db.close();
        });

    });
    var data = {"name":"","places":[]}
    var details = {"name":"","active_reports":0,"last_report_time":"0"}

    app.post('/add_base',function (req,res) {
        var dbo = db.db("police");
        var json = {"name":req.body.name,"places":[]}
        json.places = JSON.parse(req.body.details);
        dbo.collection("bases").insert(json);
        console.log("sdfsdfsdfsdf")
        res.send("ok")
    });

    //__dirname : It will resolve to your project folder.
});

app.listen(PORT, function () {
    console.log('Express app listening on port'+ PORT);
});

