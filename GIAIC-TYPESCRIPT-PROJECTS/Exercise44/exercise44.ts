// // // Aliyan Aqeel, 10,03,2024. 


function makeSandwich(...items: string[]){
  console.log("Sandwich Ingredients:");
  console.log("Bread");
  items.forEach(item => {
    console.log(item);
  })
  console.log("Bread\n");
}

makeSandwich("Chicken", "Cheese", "Mayo", "Garlic Sauce");
makeSandwich("Beef", "Garlic Sauce");
makeSandwich("Crispy Chicken", "Mayo", "Cheese");