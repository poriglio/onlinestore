angular.module("pizzaApp").factory("pizzaFactory",function(){

	var pizzas = []

	var Pizza = function(name,price,description,toppings,picture){
		this.name = name
		this.price = price
		this.description = description
		this.toppings = toppings
		this.picture = picture
		pizzas.push(this)
	}
	var pizzaCake = new Pizza("Pizza Cake",15,"Be ready to relax this evening, because dinner is going to be a pizza cake! (Laugh, it's funny. Would you just look at it? Need I say more?",["five Totino's pizzas, thawed","Duncan Hines cake mix","a good sense of humor"],"https://s-media-cache-ak0.pinimg.com/736x/a2/36/99/a236992e5977ddeb68e063d93a3c2706.jpg")

	var mcPizza = new Pizza("McPizza",8,"Burger, nugget, nugget, burger! You can eat two meals in one with this meal on a crust... but we bet you'll still want more later!",["burger","nuggets","nugget","burgers","pizza pizza"],"http://wdy.h-cdn.co/assets/cm/15/08/54ea841450594_-_mcdonalds-2.jpg")

	var metaPizza = new Pizza("Meta Pizza",20,"It's a bunch of smaller pizzas on a bigger pizza... on the crust of this very Earth.",["big pizza","small pizzas","earth","the ususal ingredients"],"http://o.onionstatic.com/images/articles/article/9891/Pizza-Hut_jpg_630x1200_upscale_q85.jpg")

	var pizzaExpress = new Pizza("Panda Exprizza",8,"You know you don't want to cook tonight, but you can't decide between two old stand-bys. Why not combine them? We dump the lo mein on the pizza so your family won't have to watch you doing it and judge your sanity. Once they taste it, though, they'll want it every day!",["lo mein","pizza crust","soy sauce","fortune cookie paper","orange chicken"],"http://www.chowstatic.com/assets/2013/12/late_night_snacks_chinese_takeout_pizza_620x413.jpg")

	var carPizza = new Pizza("Car Pizza",20000,"Remove the need for a drive to the pizza parlour with this AUTOmatic favorite! Served on a hubcap crust and delivered straight to your door, the glutton in you will appreciate its greasiness!",["motor oil","hubcap","tree-shaped air fresheners","anchovies"],"http://indulgd.com/wp-content/uploads/2014/04/pizza-in-the-wild-5.jpg")

	var thriftPizza = new Pizza("Thrift Store Pizza",3,"This pizza combines none of what you love about pizza with ALL of what you love about your local Salvation Army! On dough we got from the King Soopers markdown aisle, we spread mismatched buttons and bric-a-brac over a fine bed of VHS tape spaghetti, straight from a first-run copy of the Land Before Time.",["bric-a-brac","VHS tape","buttons","socks","half-used nail polish jars"],"http://www.chic-steals.com/wp-content/uploads/2011/02/goodwillbins11.jpg")

	return {
		pizzas : pizzas
	}

})