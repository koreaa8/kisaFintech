var express = require('express');
var weather = require('./weather');
var today = require('./today');
var app = express();

app.get('/weather', function (req, res) {
    console.log("weather is called")
    weather.current(
        function (des) {
            res.send(des);
        }
    );

})

app.get('/', function (req, res) {
    res.send('hello world');
})

app.get('/today', function (req, res) {
    res.send("오늘은", today.getDayOfWeek());
})

app.get('/user/:value', function (req, res) {
    var name = req.params.value;
    res.send(name + "님 안녕하세여")
})

app.listen(process.env.PORT || 1124);