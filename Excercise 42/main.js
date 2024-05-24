// define the function to show maicians names
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// Function to make magicians great through.map() it will modify the array
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
//Define an array of migicians names
var magicians_names = ["David Copperfield", "Penn jillette", "Teller"];
// call make_great function to modify the magicians names
var great_magicians = make_great(magicians_names);
console.log(great_magicians);
// call show_magicians function to show the great magicians modified names
show_magicians(great_magicians);
