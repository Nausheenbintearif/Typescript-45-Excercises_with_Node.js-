// Define a function that will print each magician name from an Array
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// Define an Array containing magicians names
var magicians_name = ["David Cpperfield", " Doug Hennings", "Teller"];
// Calling the function to print each magicians name
show_magicians(magicians_name);
