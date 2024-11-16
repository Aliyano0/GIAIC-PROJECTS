// // // Aliyan Aqeel, 10,03,2024. 


function showMagicians(magicians: string[]) {
  magicians.forEach(magician => {
    console.log(magician);
  })
}
function makeGreat(magicians: string[]) {
  return magicians.map(magician => `${magician} the great.`)
}

let magicians: string[] = ["Harry Houdini", "David Blaine", "Ricky Jay"];

magicians = makeGreat(magicians);

showMagicians(magicians);
