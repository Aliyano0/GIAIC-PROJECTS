var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Created an array of five places I'd like to visit:
var favPlaces = ["Denmark", "Switzerland", "Paris", "Germany", "Japan"];
// printing original array:
console.log("Original order: ", favPlaces);
// Printing array in alphabetical order(Ascending):
console.log("Alphabetical order: ", __spreadArray([], favPlaces, true).sort());
// printing original array:
console.log("Original order: ", favPlaces);
// Printing array in alphabetical order(Descending):
console.log("Reverse alphabetical order: ", __spreadArray([], favPlaces, true).sort().reverse());
// printing original array:
console.log("Original order: ", favPlaces);
// Reversing the array
favPlaces.reverse();
console.log("Reversed order", favPlaces);
// Reversing it again
favPlaces.reverse();
console.log("Original order: ", favPlaces);
// Sorting the array in alphabetical order(Ascending)
favPlaces.sort();
console.log("Alphabetical order: ", favPlaces);
// Sorting the array in alphabetical order(Descending)
favPlaces.reverse();
console.log("Reverse alphabetical order: ", favPlaces);
