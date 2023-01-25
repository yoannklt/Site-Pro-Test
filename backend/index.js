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

// INSERER DES UTILISATEUR
app.post('/user/insert', jsonParser, (req, res) => {
  const body = req.body;
  const dbConnect = dbo.getDb();
  console.log('Got body insert user:', body);
  dbConnect
    .collection("user")
    .insertOne(body)
    .then(result, err);
  if (err) {
    res.status(400).send(err.message);
  } else {
    res.json(result);
  }
});

// SUPPRIMER LES UTILISATEUR
app.delete('/user/delete', jsonParser, (req, res) => {
  const body = req.body;
  const dbConnect = dbo.getDb();
  const doc = {
    name: body.name
  };
  dbConnect
    .collection("user")
    .deleteOne(doc)
    .then(function (result, err) {
      if (err) {
        res.status(400).send("ok");
      } else {
        res.json(result)
      }
    })

  res.json("Utilisateur supprimé");
});

// MODIFIER LES UTILISATEUR
app.post('/user/updateUser', jsonParser, (req, res) => {
  const body = req.body;
  const dbConnect = dbo.getDb();
  dbConnect
    .collection("user")
    .updateOne({
      name: body.prevname
    }, {
      $set: {
        name: body.newname
      }
    })
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching users!");
      } else {
        res.json(result);
      }
    });

  res.json("Utilisateur modifié");
});



