var orm = require("../config/orm.js");


var sushi = {
    all: function(cb) {
        orm.all("sushi", function(res) {
            cb(res)
        })
    },

    // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
                // "sushi_name" "devoured"   
    orm.create("sushi", cols, vals, function(res) {
      cb(res);
    });
  },
}





// Export the database functions for the controller (catsController.js).
module.exports = sushi;