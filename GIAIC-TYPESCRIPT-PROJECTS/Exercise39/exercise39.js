// // // Aliyan Aqeel, 10,03,2024. 
// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city, country) {
    return "\"".concat(city, ", ").concat(country, "\"");
}
var pair1 = city_country("Karachi", "Pakistan");
var pair2 = city_country("Copenhagen", "Denmark");
var pair3 = city_country("Istanbul", "Turkiye");
console.log(pair1);
console.log(pair2);
console.log(pair3);
