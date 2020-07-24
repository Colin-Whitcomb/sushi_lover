var connection = require("../config/connection.js");


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

    create: function(table, cols, vals, cb) {
        // INSERT INTO table (cols) VALUES (val);
        var queryString = "INSERT INTO " + table + " (" + cols.toString() + ") " + "VALUES (" + printQuestionMarks(vals.length) + ") ";
    
        console.log(queryString);
        connection.query(queryString, vals, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      },
}


// Export the orm object for the model (cat.js).
module.exports = orm;