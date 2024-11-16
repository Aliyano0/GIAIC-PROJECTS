// // // Aliyan Aqeel, 09,03,2024. 
var current_users = ["admin", "John", "daniel", "michael", "sean"];
var new_users = ["Admin", "jordan", "lee", "SEAN", "charles"];
// Loop through new users to check for uniqueness
new_users.forEach(function (newUser) {
    // Check if the new username is already in use.
    var isUsernameTaken = current_users.some(function (currentUser) {
        return currentUser.toLowerCase() === newUser.toLowerCase();
    });
    // Print appropriate message based on the result
    if (isUsernameTaken) {
        console.log("Sorry, the username '".concat(newUser, "' is already taken. Please choose a different one."));
    }
    else {
        console.log("This username '".concat(newUser, "' is available."));
    }
});
