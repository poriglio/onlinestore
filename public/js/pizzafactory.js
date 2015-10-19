angular.module("pizzaApp").factory("pizzaFactory",function(){

	var pizzas = []

	var Pizza = function(name,price,description,toppings,glutenFree,picture){
		this.name = name
		this.price = price
		this.description = description
		this.toppings = toppings
		this.glutenFree = glutenFree
		this.picture = picture
		pizzas.push(this)
	}

	var thriftPizza = new Pizza("Thrift Store Pizza",3.99,"This pizza combines none of what you love about pizza with ALL of what you love about your local Salvation Army! On dough we got from the King Soopers markdown aisle, we spread mismatched buttons and bric-a-brac over a fine bed of VHS tape spaghetti, straight from a first-run copy of the Land Before Time.",["bric-a-brac","VHS tape","buttons","socks","half-used nail polish jars"],false,"http://www.chic-steals.com/wp-content/uploads/2011/02/goodwillbins11.jpg")

	return {
		pizzas : pizzas
	}

})