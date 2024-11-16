// // // Aliyan Aqeel, 10,03,2024. 
function makeAlbum(artist, title, tracks) {
    var album = {
        Artist: artist,
        Title: title,
    };
    if (tracks !== undefined) {
        album.Tracks = tracks;
    }
    return album;
}
var album1 = makeAlbum("Danny Zee", "AFTERLISE");
var album2 = makeAlbum("Hasan Raheem", "Maybe it's Love", 6);
var album3 = makeAlbum("Abdul Hannan", "Diya");
var album4 = makeAlbum("Ali Zafar", "Jhoom", 1);
console.log(album1);
console.log(album2);
console.log(album3);
console.log(album4);
