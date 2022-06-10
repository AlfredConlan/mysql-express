//   var sql1 = "CREATE TABLE geeksforgeeks " + "(id INT AUTO_INCREMENT PRIMARY KEY," + " name VARCHAR(255), address VARCHAR(255))";

//   var sql2 = "INSERT INTO geeksforgeeks (name, " + "address) VALUES ('Company Inc', " + "'Highway 37')";

//   var sql3 = "SELECT * FROM dogs " + "WHERE address = 'Highway 37'";

//   connection.query(sql1, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });

//   connection.query(sql2, function (err, result) {
//     if (err) throw err;
//     console.log("Insertion Successful");
//   });
