// Define a function with a rest parameter that accepts items arguments representing our sandwich
function makeSandwhich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwhich with the followig items:\n");
    items.forEach(function (singleitems) { return console.log(singleitems); });
    console.log("\nNow enjoy your Sandwhich");
}
// Call the function 3 times with 3 different number of arguments 
makeSandwhich("Chicken", "Cheese", "Mayo", "Egg");
makeSandwhich("Bread", "Butter");
makeSandwhich("Bread", "Butter", "Cheese", "Mayo", "Egg", "Chicken", "Lettuce", "Tomato");
