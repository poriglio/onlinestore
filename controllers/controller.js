var Pizza = require("../models/model.js")

var createPizza = function(request,response){

	var newPizza = new Pizza({
		name         : request.body.name,
		price        : +request.body.price,
		description  : request.body.description,
		toppings     : request.body.toppings.split(", "),
		picture      : request.body.picture,
	})

	newPizza.save(function(error,document){
		response.send(document)
	})

}

module.exports = {
	createPizza : createPizza,
}