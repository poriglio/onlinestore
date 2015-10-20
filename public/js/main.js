angular.module("pizzaApp",["ngResource"])

angular.module("pizzaApp").controller("pizzaController",["$scope","$http","pizzaFactory",function($scope,$http,pizzaFactory){

	$scope.greeting = "pizza + thing = thing pizza"

	$scope.pizzas = pizzaFactory.pizzas

	$scope.showForm = function(){
		$scope.formShown=true;
		$scope.hideButton=true;
	}

	$scope.createPizza = function(){
		$scope.hideButton=false;
		$scope.formShown=false;
		$http.post("/api/submitpizza",$scope.newPizza).then(function(returnData){
			console.log("Made a pizza!",returnData)
		})
	}

}])