console.log("in app.js");

$(document).on("click", "#submit", function(event) {
    event.preventDefault();
    console.log("in submit");
    var newFriend = {
        name: $("#name").val().trim(),
        photo: $("#photo").val().trim(),
        scores: [
            $("#q1").val(),
            $("#q2").val(),
            $("#q3").val(),
            $("#q4").val(),
            $("#q5").val(),
            $("#q6").val(),
            $("#q7").val(),
            $("#q8").val(),
            $("#q9").val(),
            $("#q10").val(),
        ]
    };
    console.log(newFriend);
    $.post("/api/friends", newFriend);
})