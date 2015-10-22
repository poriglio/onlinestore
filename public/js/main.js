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
		$scope.formShown=false;
		$scope.hideButton=false;
		$http.post("/api/submitpizza",$scope.newPizza).then(function(returnData){
			
		})
	}

	$scope.addToCart = function($index){
		console.log($index)
		$scope.cartPizza = $scope.pizzas[$index]
		$http.post("/api/addtocart",$scope.cartPizza).then(function(returnData){
			console.log("Selected pizza: " + returnData.data)
		})
	}

}])

angular.module("pizzaApp").controller("cartController",["$scope","$http","cartFactory",function($scope,$http,cartFactory){

	$scope.greeting = "I hope you're hungry..."

	$scope.pizzas = cartFactory.pizzas

}])