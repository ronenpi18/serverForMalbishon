var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Police");
  dbo.collection("Zrifin").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log("Printing Zrifin gates");
    console.log(result);
    db.close();
  });
});
