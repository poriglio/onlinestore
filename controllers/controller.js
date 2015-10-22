var Pizza = require("../models/model.js")

var createPizza = function(request,response){

	var newPizza = new Pizza({
		name         : request.body.name,
		price        : +request.body.price,
		description  : request.body.description,
		toppings     : request.body.toppings.split(", "),
		picture      : request.body.picture,
		inCart       : false,
	})

	newPizza.save(function(error,document){
		response.send(document)
	})

}

var findPizzas = function(request,response){
	Pizza.find({},function(error,docs){
		if(error){
			console.log("error!")
		}
		else{
			console.log(docs)
			response.send(docs)
		}
	})
}

var addPizza = function(request,response){
	var name = request.body.name;
	Pizza.update({name:name},{$set:{inCart:true}},function(error,docs){
		if(error){
			console.log("Error adding pizza to cart!")
		}
		else{
			response.send(docs)
		}
	})
}

var findCart = function(request,response){
	Pizza.find({inCart:true},function(error,docs){
		if(error){
			console.log("Error finding cart!")
		}
		else{
			response.send(docs)
		}
	})
}

module.exports = {
	createPizza : createPizza,
	findPizzas  : findPizzas,
	addPizza    : addPizza,
	findCart    : findCart,
}