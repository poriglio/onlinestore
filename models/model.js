var mongoose = require("mongoose")

var pizzaSchema = mongoose.Schema({
	name         : {type : String},
	price        : {type : Number},
	description  : {type : String},
	toppings     : {type : Array},
	picture      : {type : String},
	inCart       : {type : Boolean, default : false},
})

module.exports = mongoose.model("Pizza",pizzaSchema)