const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://petpawadmin:<ekrxjvptvh>@cluster0.la9ro.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("drpetpaw").collection("users");
  // perform actions on the collection object
  client.close();
});

