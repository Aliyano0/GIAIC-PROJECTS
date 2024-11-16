// Aliyan, 26-02-2024
var person1 = "Aliyan Aqeel";
console.log(person1.toLowerCase());
console.log(person1.toUpperCase());
function toTitleCase(str) {
    return str.split(" ").map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); }).join(" ");
}
var titleCaseString = toTitleCase(person1);
console.log(titleCaseString);
