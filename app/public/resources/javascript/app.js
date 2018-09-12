var friends = $.get("/api/friends");

$(document).on("click", "#submit", function(event) {
    event.preventDefault();
    var newFriend = {
        name: $("#name").val().trim(),
        photo: $("#photo").val().trim(),
        scores: [
            parseInt($("#q1").val()),
            parseInt($("#q2").val()),
            parseInt($("#q3").val()),
            parseInt($("#q4").val()),
            parseInt($("#q5").val()),
            parseInt($("#q6").val()),
            parseInt($("#q7").val()),
            parseInt($("#q8").val()),
            parseInt($("#q9").val()),
            parseInt($("#q10").val()),
        ]
    };
    $.post("/api/friends", newFriend);
    findFriend(newFriend);
});

function findFriend(newGuy) {
    friends = JSON.parse(friends.responseText);
    var compatFriend = 0;
    var currentCompat = 50;
    var lastCompat = 50;
    for (var i = 0; i < friends.length; i++) {
        currentCompat = compatNum(newGuy.scores, friends[i].scores);
        if (currentCompat < lastCompat) {
            compatFriend = i;
            lastCompat = currentCompat;
        }
    }
    doModal(friends[compatFriend]);
    
};

function compatNum(scores1, scores2) {
    var final = 0;
    for (var i = 0; i < scores1.length; i++) {
        final += Math.abs(scores1[i] - scores2[i]);
    };
    return final;
};

function doModal(friend) {
    $(".modal-body").empty();
    var printFriend = $("<div><img src='" + friend.photo + "' style='width: 50%;'/><h4 class='text-center' style='color:black;'>" + friend.name + "</h4></div>");
    $(".modal-body").append(printFriend);
    $("#friendModal").modal('show');
    friends = $.get("/api/friends");
    setTimeout(function() {location.href='/';}, 5000);
};

