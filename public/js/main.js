angular.module("pizzaApp",["ngResource"])

angular.module("pizzaApp").controller("pizzaController",["$scope","$http","pizzaFactory",function($scope,$http,pizzaFactory){

	$scope.greeting = "pizza + thing = thing pizza"

	$scope.pizzas = pizzaFactory.pizzas
	console.log(pizzaFactory.pizzas)

	$scope.showForm = function(){
		$scope.formShown=true;
		$scope.hideButton=true;
	}

	$scope.createPizza = function(){
		$scope.hideButton=false;
		$scope.formShown=false;
		$http.post("/api/submitpizza",$scope.newPizza).then(function(returnData){
			
		})
	}

}])

angular.module("pizzaApp").controller("cartController",["$scope","$http","cartFactory",function($scope,$http,cartFactory){

	$scope.greeting = "I hope you're hungry..."

	$scope.addToCart = function(){
		console.log("You're shopping!")
	}

}])