// // // // // Aliyan Aqeel, 03,03,2024. 
let guestList: string [] = ["Areeb", "Mubashir", "Daniyal", "Safwan"];

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
for (let i= 0; i < guestList.length; i++){
  console.log(`Hi ${guestList[i]}, You are cordially invited to dinner. We would be honored to have your presence.\n`);
}

