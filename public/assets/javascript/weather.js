var database = firebase.database();

var YQL = require('yql');

var query = new YQL('select * from weather.forecast where (location = 94089)');

query.exec(function (err, data) {
    var location = data.query.results.channel.location;
    var condition = data.query.results.channel.item.condition;

    console.log('The current weather in ' + location.city + ', ' + location.region + ' is ' + condition.temp + ' degrees.');
});