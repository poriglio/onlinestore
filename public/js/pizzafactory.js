angular.module("pizzaApp").factory("pizzaFactory",function($resource){

	var pizzas = $resource("/api/pizzas")

	return {
		pizzas : pizzas.query()
	}
})