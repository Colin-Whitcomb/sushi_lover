var orm = require("../config/orm.js");


var sushi = {
  all: function (cb) {
    orm.all("sushi", function (res) {
      cb(res)
    })
  },

  // The variables cols and vals are arrays.
  create: function (name, cb) {
    // "sushi_name" "devoured"   
    orm.create("sushi", ["sushi_name", "devoured"], [name, 0], function (res) {
      cb(res);
    });
  },

  update: function (id, cb) {
    // send ORM table name and id of obj
    console.log("model id: " + id);
    orm.update("sushi", id, function (res) {
      cb(res);
    });
  },

  delete: function(id, cb) {
    orm.delete("sushi", id, function(res) {
      cb(res);
    });
  }
}




// Export the database functions for the controller (catsController.js).
module.exports = sushi;