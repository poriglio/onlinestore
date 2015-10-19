angular.module("pizzaApp",[])

angular.module("pizzaApp").controller("pizzaController",["$scope","$http","pizzaFactory",function($scope,$http,pizzaFactory){

	$scope.greeting = "pizza + thing = thing pizza"

	$scope.pizzas = pizzaFactory.pizzas

}])