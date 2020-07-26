var orm = require("../config/orm.js");


var sushi = {
    all: function(cb) {
        orm.all("sushi", function(res) {
            cb(res)
        })
    },

    // The variables cols and vals are arrays.
  create: function(name, cb) {
                // "sushi_name" "devoured"   
    orm.create("sushi", ["sushi_name", "devoured"],[name, 0], function(res) {
      cb(res);
    });
  },
}





// Export the database functions for the controller (catsController.js).
module.exports = sushi;