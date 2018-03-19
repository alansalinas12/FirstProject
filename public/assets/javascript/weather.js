var database = firebase.database();

var keyAPI = "36f29f4a18b4bbad3f41032535ed8d43";


var queryURL = "https://api.darksky.net/forecast/" + keyAPI + "/" + latitude + "," + [longitude] + "," + time;

database.ref("events/")
    .on("child_added", function (snapshot) {
        var sv = snapshot.val();
        key = snapshot.key;


       


        database.ref("/eventWeather/").push(eventConditions);

    });