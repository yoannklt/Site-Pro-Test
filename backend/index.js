const express = require("express");
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
  dbConnect
  .collection("user")
  .insertOne({...body})
  .toArray(function (err, result) {
      if (err) {
      res.status(400).send("Error fetching pokemons!");
      } else {
      res.json(result);
      }
  });
  
  res.json("c'est inserer");
});

// SUPPRIMER LES UTILISATEUR
app.post('/user/delete', jsonParser, (req, res) =>{
  const body = req.body;
  const dbConnect = dbo.getDb();
  const doc = {
      name:body.name
  };
  dbConnect
      .collection("user")
      .deleteOne(doc)
      .then(function (result,err) {
          if (err) {
              res.status(400).send("ok");
          }else{
              res.json(result)
          }
      })
      
      res.json("c'est supprimer");
  });

// MODIFIER LES UTILISATEUR
app.post('/user/updateUser', jsonParser, (req, res) =>{
  const body = req.body;
  const dbConnect = dbo.getDb();
  dbConnect
  .collection("user")
  .updateOne({
      name: body.prevname
  },{
      $set:{ 
          name: body.newname
      }
  })
  .toArray(function (err, result) {
      if (err) {
      res.status(400).send("Error fetching pokemons!");
      } else {
      res.json(result);
      }
  });

  res.json("c'est modifier");
});



