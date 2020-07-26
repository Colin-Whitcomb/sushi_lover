var express = require("express");

var router = express.Router();

// Import the model (sushi.js) to use its database functions.
var sushi = require("../models/sushi.js");

// Create all our routes and set up logic within those routes where required.

// Loads the Home page
router.get("/", function (req, res) {
    sushi.all(function (data) {
        var hbsObject = {
            sushi_order: data
        }; 
        // put this on the page (hbsObject);
        // console.log(hbsObject);
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



// Export routes for server.js to use.
module.exports = router;