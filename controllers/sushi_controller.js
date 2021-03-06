var express = require("express");

var router = express.Router();

// Import the model (sushi.js) to use its database functions.
var sushi = require("../models/sushi.js");

// Create all our routes and set up logic within those routes where required.

// Loads the Home page
router.get("/", function (req, res) {
    sushi.all(function (data) {
        var hbsObject = {
            orders: data
        };
        // put this on the page (hbsObject);
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// Listens for submit button to be clicked
// Creates new sushi order
router.post("/api/sushi", function (req, res) {
    // req.body.sushi_name = what user wrote in text area.
    console.log("Post was sent: " + req.body.sushi_name);
    sushi.create([req.body.sushi_name],


        function (result) {
            // Send back the ID of the new quote
            res.json({
                id: result.insertId
            });
        });
});

router.put("/api/sushi/:id", function (req, res) {
    console.log("PUT was called");
    var id = req.params.id;

    console.log("id: ", id);

    sushi.update(id, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/sushi/:id", function (req, res) {
    var id = req.params.id;

    sushi.delete(id, function (result) {
        if (result.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});



// Export routes for server.js to use.
module.exports = router;