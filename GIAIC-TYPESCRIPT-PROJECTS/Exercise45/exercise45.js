// // // Aliyan Aqeel, 10,03,2024. 
// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
// 
function createCar(manufacturer, model) {
    var extras = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extras[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    extras.forEach(function (extra) {
        var _a = Object.entries(extra)[0], key = _a[0], value = _a[1];
        car[key] = value;
    });
    return car;
}
var carInfo = createCar("Honda", "Civic", { color: "White" }, { year: 2023 });
console.log(carInfo);
