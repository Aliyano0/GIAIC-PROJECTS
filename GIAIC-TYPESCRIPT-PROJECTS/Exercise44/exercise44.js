// // // Aliyan Aqeel, 10,03,2024. 
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Ingredients:");
    console.log("Bread");
    items.forEach(function (item) {
        console.log(item);
    });
    console.log("Bread\n");
}
makeSandwich("Chicken", "Cheese", "Mayo", "Garlic Sauce");
makeSandwich("Beef", "Garlic Sauce");
makeSandwich("Crispy Chicken", "Mayo", "Cheese");
