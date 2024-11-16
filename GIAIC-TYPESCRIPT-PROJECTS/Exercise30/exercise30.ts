// // Aliyan Aqeel, 09,03,2024. 


let usernames: string[] = ["admin", "john", "daniel", "michael", "sean"];
// Loop for usernames
usernames.forEach(username=>{
  if(username == "admin"){
    console.log(`Hello admin, would you like to see a status report?`)
  }
  else{
    console.log(`Hello ${username}, thank you for logging in again.`);
  }
})
