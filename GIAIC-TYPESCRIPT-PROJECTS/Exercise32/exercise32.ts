// // // Aliyan Aqeel, 09,03,2024. 


let current_users: string[] = ["admin", "John", "daniel", "michael", "sean"];
let new_users: string[] = ["Admin", "jordan", "lee", "SEAN", "charles"];


// Loop through new users to check for uniqueness
new_users.forEach((newUser) => {
  // Check if the new username is already in use.
  const isUsernameTaken = current_users.some((currentUser) =>
    currentUser.toLowerCase() === newUser.toLowerCase()
  );
  // Print appropriate message based on the result
  if (isUsernameTaken) {
    console.log(`Sorry, the username '${newUser}' is already taken. Please choose a different one.`);
  } else {
    console.log(`This username '${newUser}' is available.`);
  }
});

