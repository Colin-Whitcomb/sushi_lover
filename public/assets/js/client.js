$(document).ready(function () {
    console.log("I loaded");
    // When User clicks on submit
    $("#submit_btn").on("click", function (event) {
        event.preventDefault();
        console.log("newSushi: ");
        // Make sure to preventDefault on a submit event.


        var newSushi = {
            sushi_name: $("#soosh").val().trim(),
        };
        alert("newSushi: " + newSushi);
        // Send the POST request.
        $.ajax("/api/sushi", {
            type: "POST",
            data: newSushi
        }).then(
            function () {
                console.log("created new sushi order");
                // Reload the page to get the updated list
                $("#soosh").empty();
            }
        );
    });

});