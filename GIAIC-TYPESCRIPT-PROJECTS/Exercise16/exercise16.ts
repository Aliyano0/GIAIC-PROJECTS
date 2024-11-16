// // Aliyan Aqeel, 04,03,2024. 
// // // Code from Exercise 15
// Exercise 14
let guestList: string[] = ["Areeb", "Mubashir", "Daniyal", "Safwan"];

guestList.forEach(guests => {
  console.log(`Hi ${guests}, you are cordially invited to dinner. We would be honored to have your presence.`)
});

// Exercise 15

// Mubashir could'nt make the dinner
let unableToAttend = "Mubashir";
console.log(`Unfortunately, ${unableToAttend} won't be able to make it to the dinner.\n`);

// Assigning newGuest
let newGuest: string = "Shahmeer";
guestList[guestList.indexOf(unableToAttend)] = newGuest;

// Printing new guestList
for (let i = 0; i < guestList.length; i++) {
  console.log(`Hi ${guestList[i]}, You are cordially invited to dinner. We would be honored to have your presence.\n`);
}


// EXERCISE 16
console.log("Good news! I have found a bigger dinner table. So, we have more space for our guests.");


// Adding one new guest to the beginning of my array.
guestList.unshift("Shayan");

// Adding one new guest in the middle of array.
guestList.splice(2, 0, "Shahzaib");

// Adding one new guest at the end of array.
guestList.push("Izan");


// printing invitation message for each person.
guestList.forEach(guests => {
  console.log(`Hi ${guests}, You are cordially invited to dinner. We would be honored to have your presence.\n`)
});



