// // // Aliyan Aqeel, 10,03,2024. 
// Great Magicians: Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function showMagicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function makeGreat(magicians) {
    return magicians.map(function (magician) { return "".concat(magician, " the great."); });
}
var magicians = ["Harry Houdini", "David Blaine", "Ricky Jay"];
magicians = makeGreat(magicians);
showMagicians(magicians);
