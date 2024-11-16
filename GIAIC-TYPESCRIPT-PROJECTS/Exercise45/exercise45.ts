// // // Aliyan Aqeel, 10,03,2024. 

// 
function createCar(manufacturer: string, model: string, ...extras: { [key: string]: any }[]) {
  const car: { manufacturer: string, model: string, [key: string]: any } = {
    manufacturer,
    model,
  }
  extras.forEach(extra => {
    const [key, value] = Object.entries(extra)[0];
    car[key] = value;
  })
  return car;
}

const carInfo = createCar("Honda", "Civic", { color: "White" }, { year: 2023 });

console.log(carInfo);

