// // // Aliyan Aqeel, 11,03,2024. 


function makeAlbum(artist: string, title: string, tracks?: number){
  const album: {Artist: string; Title: string;  Tracks?: number} = {
    Artist : artist,
    Title : title,
  }

  if (tracks !== undefined){
    album.Tracks = tracks;
  }

  return album;
}

const album1: {Artist: string; Title: string;} = makeAlbum("Danny Zee", "AFTERLISE");
const album2: {Artist: string; Title: string;} = makeAlbum("Hasan Raheem", "Maybe it's Love", 6);
const album3: {Artist: string; Title: string;} = makeAlbum("Abdul Hannan", "Diya");
const album4: {Artist: string; Title: string;} = makeAlbum("Ali Zafar", "Jhoom", 1);


console.log(album1);
console.log(album2);
console.log(album3);
console.log(album4);
