// Defining the make_album function
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Calling three functions & creating 3 variables with different values
var album1 = make_album("Hamza", "ALbum title 1");
var album2 = make_album("Usman", "ALbum title 2");
// Calling make_album function with third parameter
var album3 = make_album("Ali", "ALbum title 3", 20);
// Print values of our objects created by the above functions
console.log(album1);
console.log(album2);
console.log(album3);
