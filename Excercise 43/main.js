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
// Making a copy of array through .Slice() function
var copy_magicians_names = magicians_names.slice();
// Modify the copied array to include "The Great" with theeir names
var copy_great_magicians = make_great(copy_magicians_names);
// Show both arrays original and copied
// Original
console.log("Original array\n");
show_magicians(magicians_names);
// Copied
console.log("\nCopied array\n");
show_magicians(copy_great_magicians);
