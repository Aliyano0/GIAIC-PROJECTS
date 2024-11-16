// // // Aliyan Aqeel, 09,03,2024. 


let usernames: string[] = [];
// IF statement for empty list.
if(usernames.length === 0){
  console.log("We need to find some users!"); 
}

// Loop for usernames
usernames.forEach(username=>{
  if(username == "admin"){
    console.log(`Hello admin, would you like to see a status report?`)
  }
  else{
    console.log(`Hello ${username}, thank you for logging in again.`);
  }
})

