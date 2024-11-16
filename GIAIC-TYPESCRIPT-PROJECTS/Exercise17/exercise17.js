// // //  CODE FROM EXERCISE 16 
// Exercise 14
var guestList = ["Areeb", "Mubashir", "Daniyal", "Safwan"];
guestList.forEach(function (guests) {
    console.log("Hi ".concat(guests, ", you are cordially invited to dinner. We would be honored to have your presence."));
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
// EXERCISE 16
console.log("Good news! I have found a bigger dinner. So, we have more space for our guests.");
// Adding one new guest to the beginning of my array.
guestList.unshift("Shayan");
// Adding one new guest in the middle of array.
guestList.splice(2, 0, "Shahzaib");
// Adding one new guest at the end of array.
guestList.push("Izan");
// printing invitation message for each person.
guestList.forEach(function (guests) {
    console.log("Hi ".concat(guests, ", You are cordially invited to dinner. We would be honored to have your presence.\n"));
});
// // // START OF EXERCISE 17 
// Printing apology message
console.log("Hi there, unfortunately I got to know that  new dinner table won't be arriving in time for the dinner. So I can only invite two people. My apologies for the inconvenience\n");
// Removing guests one at a time and sending a apology message to them 
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry, ".concat(removedGuest, ", I can't invite you to dinner."));
}
// Printing a message to remaining two people
guestList.forEach(function (guests) {
    console.log("Hi ".concat(guests, ", you are still invited to the dinner."));
});
// Removing the remaining two names from the list.
guestList.splice(0, guestList.length);
// Printing Empty List
console.log(guestList);
