//jshint esversion: 6

const express = require("express");
const https = require("https");
 
const app = express();

app.get("/", function (req, res) {

    const url = "https://api.openweathermap.org/data/2.5/weather?q=aurangabad&units=metric&appid=321f82581bd9830ec1119d4992566d66";
    https.get(url, function (response) {
        console.log(response);
    });
   
    res.send("Hello");
});


app.listen(3000, function () {
    console.log("server started Successfully at 3000!!!");
});