// // // 
var guestList = ["Areeb", "Mubashir", "Daniyal", "Safwan"];
guestList.forEach(function (guests) {
    console.log("Hi ".concat(guests, ", You are cordially invited to dinner. We would be honored to have your presence."));
});
// Exercise 15
// Mubashir could'nt make the dinner
var unableToAttend = "Mubashir";
console.log("Unfortunately, ".concat(unableToAttend, " won't be able to make it to the dinner.\n"));
// Assigning newGuest
var newGuest = "Shahmeer";
guestList[guestList.indexOf(unableToAttend)] = newGuest;
// Printing new guestList
for (var i = 0; i < guestList.length; i++) {
    console.log("Hi ".concat(guestList[i], ", You are cordially invited to dinner. We would be honored to have your presence.\n"));
}
