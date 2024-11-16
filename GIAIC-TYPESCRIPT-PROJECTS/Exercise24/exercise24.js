// EXERCISE 24
// • Tests for equality and inequality with strings
var fruit = "apple";
console.log("Equality and Inequality:");
console.log(fruit == "apple");
console.log(fruit == "Apple");
console.log(fruit != "Apple");
console.log(fruit != "apple");
// • Tests using the lower case function
console.log("Testing with lower case:");
console.log("Apple".toLowerCase() == "apple");
console.log("Apple".toLowerCase() == "Apple");
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Numerical Tests:");
var age = 32;
console.log(age == 32);
console.log(age != 32);
console.log(age < 44);
console.log(age > 44);
console.log(age <= 44);
console.log(age >= 44);
// • Tests using "and" and "or" operators
console.log("Tests with 'and' and 'or':");
console.log(age >= 30 && age < 35);
console.log(age >= 40 && age < 29);
console.log(age >= 30 || age < 35);
console.log(age >= 36 || age < 30);
// • Test whether an item is in a array
var array = ["car", "bike", "cycle"];
console.log("Is 'car' in array? I predict True");
console.log(array.includes("car"));
console.log("Is 'bus' in array? I predict False");
console.log(array.includes("bus"));
// • Test whether an item is not in a array
console.log("Is 'bus' not in array? I predict True");
console.log(!array.includes("bus"));
console.log("Is 'car' not in array? I predict False");
console.log(!array.includes("car"));
