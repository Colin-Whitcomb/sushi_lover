var connection = require("../config/connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

var orm = {
  // selects all data from the sushi table in sushi_db
  all: function (tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  create: function (table, cols, vals, cb) {
    // INSERT INTO table (cols) VALUES (val);
    var queryString = "INSERT INTO " + table + " (" + cols.toString() + ") " + "VALUES (" + printQuestionMarks(vals.length) + ") ";

    console.log(queryString);
    connection.query(queryString, vals, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  // An example of objColVals would be {name: panther, sleepy: true}
  update: function (table, id, cb) {
    // UPDATE sushi SET devoured = 1 WHERE sushi.id=1;
    console.log("orm id: " + id);
    var queryString = "UPDATE " + table + " SET devoured = 1 WHERE sushi.id = " + id ;

    console.log(queryString);
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  delete: function(table, id, cb) {
    var queryString = "DELETE FROM " + table + " WHERE sushi.id = " + id;

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }


}


// Export the orm object for the model
module.exports = orm;