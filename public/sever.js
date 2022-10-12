const express = require("express");

const app = express();

app.get("/", function(request, response){
    response.send("<h1>hello, world!<h1>");
})

app.get("/contact", function(req,res){
    res.send("contact me with: felixbelix007@gmail.com")
})

app.get("/index", function(req,res){
    res.send("contact me with: felixbelix007@gmail.com")
})

app.get("/about", function(req, res){
    res.send("hi I am Belingstion, Working in Difisailor as a SEnior developer")
})

app.get("/profile", function(req, res){
    res.send("hi I am Belingstion, Working in Difisailor as a SEnior developer")
})

app.listen(3000, function () {
    console.log("Sever started");
});