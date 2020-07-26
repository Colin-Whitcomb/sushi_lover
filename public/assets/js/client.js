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
                location.reload();
            }
        );
    });

    $(".devour").on("click", function (event) {
        console.log("devour clicked");
        var id = $(this).data("id");
        var dev = $(this).data("dev");
        console.log(dev === 0);

        if (dev === 0) {
            callPut();
        } else if (dev === 1) {
            callDelete();
        };

        function callPut () {
            console.log("PUT was called")
            // Send the PUT request.
    
            $.ajax("/api/sushi/" + id, {

                type: "PUT",
                //   data: newSleepState
            }).then(
                function () {
                    console.log("changed devour to 1");
                    // Reload the page to get the updated list
                    location.reload();
                }
            );
        } // Send the DELETE request.

        function callDelete() {
            $.ajax("/api/sushi/" + id, {
                type: "DELETE"
            }).then(
                function () {
                    console.log("deleted oder id", id);
                    // Reload the page to get the updated list
                    location.reload();
                }
            );
        };
    });
});


//     } // Send the DELETE request.
//     $.ajax("/api/sushi/" + id, {
//         type: "DELETE"
//     }).then(
//         function () {
//             console.log("deleted oder id", id);
//             // Reload the page to get the updated list
//             location.reload();
//         }
//     });

// $(".delete-order").on("click", function (event) {
//     var id = $(this).data("id");

//     // Send the DELETE request.
//     $.ajax("/api/sushi/" + id, {
//         type: "DELETE"
//     }).then(
//         function () {
//             console.log("deleted oder id", id);
//             // Reload the page to get the updated list
//             location.reload();