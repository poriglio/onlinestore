// REQUIRES

var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/pizzathing")
var db = require("mongodb")

// CREATE EXPRESS APP OBJECT
var app = express()

// CONFIGURATION
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + "/public"))

// ROUTES

var pizzaMaker = require("./controllers/controller.js")

app.get("/",function(request,response){
	response.sendFile("/html/index.html",{root:"./public"})
})

app.post("/api/submitpizza",pizzaMaker.createPizza)

// CREATE SERVER AND LSITEN FOR CONNECTIONS

var port = 3000

app.listen(port,function(){
	console.log("The server is listening on port " + port)
})