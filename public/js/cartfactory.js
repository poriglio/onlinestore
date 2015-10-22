angular.module("pizzaApp").factory("cartFactory",function($resource){

	var pizzas = $resource("/api/findcart")

	return {
		pizzas : pizzas.query()
	}
})