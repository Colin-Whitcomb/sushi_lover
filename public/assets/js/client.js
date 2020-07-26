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

        // Send the POST request.
        $.ajax("/api/sushi", {
            type: "POST",
            data: newSushi
        }).then(
            function () {
                console.log("created new sushi order");
                // Reload the page to get the updated list
                $("#soosh").val('');
            }
        );
    });

    $("#devour").on("click", function(event) {
        var id = $(this).data("id");
        // var newSleep = $(this).data("newsleep");
    
        // var newSleepState = {
        //   sleepy: newSleep
        // };
    
        // Send the PUT request.
        $.ajax("/api/sushi/" + id, {
          type: "PUT",
        //   data: newSleepState
        }).then(
          function() {
            console.log("changed devour to 1");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });

});