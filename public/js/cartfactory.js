angular.module("pizzaApp").factory("cartFactory",function($resource){

	var pizzas = $resource("/api/pizzas")

	return {
		pizzas : pizzas.query()
	}
})