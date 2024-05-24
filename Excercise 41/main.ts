// Define a function that will print each magician name from an Array
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

// Define an Array containing magicians names
let magicians_name = ["David Cpperfield", "Doug Hennings", "Teller"]; 

// Calling the function to print each magicians name
show_magicians(magicians_name);