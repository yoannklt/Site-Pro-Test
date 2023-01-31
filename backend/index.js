const express = require("express");
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
var cors = require('cors');
const dbo = require("./db/db");
const app = express();
const port = 4444;

app.use(cors())

dbo.connectToServer();

app.listen(port, function () {
  console.log(`App listening on port ${port}!`);
});

//LISTE D'UTILISATEURS
app.get("/user/list", function (req, res) {
  const dbConnect = dbo.getDb();
  dbConnect
    .collection("user")
    .find({})
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching users!");
      } else {
        res.json(result);
      }
    });
});

//LOGIN
app.get('/user/login', (req, res) => {
  const dbConnect = dbo.getDb();
  dbConnect
      .collection('user')
      .findOne({
          $and: [
              {email: { $eq: req.query.email }},
              {password: { $eq: req.query.password }}
          ]
      })
      .then(result => res.status(200).json(result))
      .catch(err => res.sendStatus(400, "Failed to fetch the user"));
})

//CHECK IF ACCOUNT ALREADY EXISTS
app.get('/user/checking', (req, res) =>{
  const dbConnect = dbo.getDb();
  dbConnect
    .collection('user')
    .findOne({
      email: { $eq: req.query.email }
    })
    .then(result => {
      console.log(result)
      res.status(200).json(result!=null)
    })
    .catch(err => console.error(err));
})

// INSERER DES UTILISATEURS
app.post('/user/insert', jsonParser, (req, res) => {
  const body = req.body;
  const dbConnect = dbo.getDb();
  console.log('Got body insert user:', body);
  dbConnect
  .collection("user")
  .insertOne(body)
  .then(result => res.status(200).json(result))
  .catch(err => console.error(err));
});

// SUPPRIMER LES UTILISATEURS
app.delete('/user/delete', jsonParser, (req, res) => {
  const body = req.body;
  const dbConnect = dbo.getDb();
  console.log('Got body delete user:', body);
  dbConnect
    .collection("user")
    .deleteOne(body);
  res.json(body);
});

// MODIFIER LES UTILISATEURS
app.post('/user/update', jsonParser, (req, res) => {
  const dbConnect = dbo.getDb();
  const body = req.body;
  console.log(body)
  dbConnect
    .collection("user")
    .updateOne( { first_name:req.query.name }, { $set: { ...body} }, { upsert: false })
  res.json(body);
})


//LISTE DES ROOM
app.get("/room/list", function (req, res) {
  const dbConnect = dbo.getDb();
  dbConnect
    .collection("room")
    .find({})
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching users!");
      } else {
        res.json(result);
      }
    });
});

// INSERER DES ROOM
app.post('/room/insert', jsonParser, (req, res) => {
  const body = req.body;
  const dbConnect = dbo.getDb();
  console.log('Got body insert room:', body);
  if (body.email) {

  }
  dbConnect
    .collection("room")
    .insertOne(body)
    .then(result, err);
  
});

// SUPPRIMER LES ROOM
app.delete('/room/delete', jsonParser, (req, res) => {
  const body = req.body;
  const dbConnect = dbo.getDb();
  console.log('Got body delete room:', body);
  dbConnect
    .collection("room")
    .deleteOne(body);
  res.json(body);
});

// MODIFIER LES ROOM
app.post('/room/update', jsonParser, (req, res) => {
  const dbConnect = dbo.getDb();
  const body = req.body;
  console.log(body)
  dbConnect
    .collection("room")
    .updateOne( { name:req.query.name }, { $set: { ...body} }, { upsert: false })
  res.json(body);
})

//CREER UNE RESERVATION
app.post('/booking/insert', jsonParser, (req, res) => {
  const body = req.body;
  const dbConnect = dbo.getDb();
  console.log('Got body insert booking:', body);
  dbConnect
  .collection("booking")
  .insertOne(body)
  .then(result => res.status(200).json(result))
  .catch(err => console.error(err));
});
