const express = require("express");
const dbo = require("./db/db");
const app = express();
const port = 4444;

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
  