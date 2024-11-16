
// Aliyan, 26-02-2024
let person1: string = "Aliyan Aqeel";


console.log(person1.toLowerCase());
console.log(person1.toUpperCase());

function toTitleCase(str: string) {
  return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
}

const titleCaseString = toTitleCase(person1);
console.log(titleCaseString);

