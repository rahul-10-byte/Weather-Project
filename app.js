//jshint esversion: 6

const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
 
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {

    res.sendFile(__dirname + "/index.html");

});

app.post("/", function (req, res) {

    const query = req.body.cityName;
    const apiKey = "321f82581bd9830ec1119d4992566d66"; 
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query +"&units="+ unit +"&appid=" + apiKey;

    https.get(url, function (response) {

        response.on("data", function (data) {
            const weatherData = JSON.parse(data);
            const cityName = weatherData.name;
            const temp = weatherData.main.temp;
            const tempDesc = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;

            const imgURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

            res.write("<p><h3>The weather is currently " + tempDesc + "</h3></p>");
            res.write("<h1>The temperature in " + cityName + " is " + temp + " degree celcius.</h1>");
            res.write("image: <img src="+ imgURL +">");

            res.send();
            console.log(temp);
            console.log(tempDesc);
        });
    });
});

app.listen(3000, function () {
    console.log("server started Successfully at 3000!!!");
});