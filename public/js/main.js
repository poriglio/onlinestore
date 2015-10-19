angular.module("pizzaApp",[])

angular.module("pizzaApp").controller("pizzaController",["$scope","$http",function($scope,$http){

	$scope.greeting = "pizza + thing = thing pizza"

}])