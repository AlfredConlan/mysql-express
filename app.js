const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false })); //Parse URL-encoded bodies
app.use(express.json()); //Used to parse JSON bodies
app.use(cors());

// Create a connection to the database
const connection = mysql.createConnection({
  host: "xlf3ljx3beaucz9x.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "rj3xer4sskxmaoyc",
  password: "ot5r13rtbwyu39di",
  database: "h7734b2af7y0jdzi",
});

// open the MySQL connection
connection.connect((error) => {
  if (error) {
    console.log("A error has been occurred " + "while connecting to database.");
    throw error;
  }

  ////////////////////////////////////////
  // API Enpoints
  ////////////////////////////////////////

  app.get("/", (req, res) => {
    connection.query("SELECT * FROM dogs ", function (err, result) {
      if (err) throw err;
      res.send("There is no data at this endpoint");
    });
  });

  app.get("/dogs", (req, res) => {
    connection.query("SELECT * FROM dogs ", function (err, result) {
      if (err) throw err;
      res.send(result);
    });
  });

  app.put("/dogs/:name", (req, res) => {
    let params = req.body;
    let name = req.params.name;
    connection.query(
      `UPDATE dogs SET 
      name='${params.name}', 
      breed='${params.breed}', 
      gender='${params.gender}', 
      disposition='${params.disposition}' 
      WHERE name=? `,
      name,
      function (err, result) {
        if (err) throw err;
        res.send(result);
      }
    );
  });

  app.post("/dogs", (req, res) => {
    let params = req.body;
    connection.query("INSERT INTO dogs SET ?", params, function (err, result) {
      if (err) throw err;
      res.send(result);
    });
  });

  app.delete("/dogs/:name", (req, res) => {
    var dogName = req.params.name;
    connection.query("DELETE FROM dogs WHERE name=?", dogName, function (err, result) {
      if (err) throw err;
      res.send(result);
    });
  });

  //If Everything goes correct, Then start Express Server
  app.listen(PORT, () => {
    console.log("Database connection is Ready and " + "Server is Listening on Port ", PORT);
  });
});
