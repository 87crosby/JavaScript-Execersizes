function pizzaOven(crust, sauce, cheese, toppings) {
    var pizza = {};
    pizza.crust = crust;
    pizza.sauce = sauce;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}
    
var p1 = pizzaOven("deep-dish", "traditional", "mozzarella", ["pepperoni, sausage"]);
console.log(p1);

var p2 = pizzaOven("hand-tossed", "marinara", "mozzarella", ["mushrooms", "olives", "onions"]);
console.log(p2)

var p3 = pizzaOven("hand-tossed", "traditional", "cheddar", ["pepperoni", "jalapenos"]);
console.log(p3)

var p4 = pizzaOven("thin-crust", "marinara", "feta", ["jalapenos", "olives", "sausage"]);
console.log(p4)
console.log("hi")