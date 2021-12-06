//jshint esversion: 6

const express = require("express");
const { write } = require("fs");
const https = require("https");
 
const app = express();

app.get("/", function (req, res) {

    const url = "https://api.openweathermap.org/data/2.5/weather?q=aurangabad&units=metric&appid=321f82581bd9830ec1119d4992566d66";
    https.get(url, function (response) {

        response.on("data", function (data) {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const tempDesc = weatherData.weather[0].description;
            
            console.log(temp);
            console.log(tempDesc);
        });
    });
   
    res.send("Hello");
});


app.listen(3000, function () {
    console.log("server started Successfully at 3000!!!");
});