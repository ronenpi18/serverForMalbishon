var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Police");
  dbo.collection("Kiriya").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log("Printing all kiriya gates");
    console.log(result);
    db.close();
  });
});
