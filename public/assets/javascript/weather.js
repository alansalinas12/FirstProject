var database = firebase.database();

var YQL = require('yql');

database.ref("events/")
    .on("child_added", function (snapshot) {
        var sv = snapshot.val();
        key = snapshot.key;

        eventLocation = sv.location;
        
        var query = new YQL('select * from weather.forecast where (location = 94089)');
        
        query.exec(function (err, data) {
            var location = data.query.results.channel.location;
            var condition = data.query.results.channel.item.condition;

            eventConditions = {
                text: condition.text,
                temp: condition.temp,
                date: condition.date
            };

            console.log('The current weather in ' + location.city + ', ' + location.region + ' is ' + condition.temp + ' degrees.');
        });


        database.ref("/eventWeather/").push(eventConditions);

    })