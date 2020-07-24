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
}


// Export the orm object for the model (cat.js).
module.exports = orm;