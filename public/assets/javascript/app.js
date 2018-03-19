(function () {
    var database = firebase.database();
    
    database.ref("/weatherconditions/")
        .on("child_added", function(snapshot) {
            var sv = snapshot.val();
            key = snapshot.key;

            locationCell = newEvent.location;
            timeCell = newEvent.start;
            tempCell = sv.temp;
            conditionCell = sv.text;

            $("#event-weather-table").append(locationCell + timeCell + tempCell + conditionCell);
        })
});