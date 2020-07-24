var orm = require("../config/orm.js");


var sushi = {
    all: function(cb) {
        orm.all("sushi", function(res) {
            cb(res)
        })
    }
}





// Export the database functions for the controller (catsController.js).
module.exports = sushi;