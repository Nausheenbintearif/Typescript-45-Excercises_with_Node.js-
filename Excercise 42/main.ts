// define the function to show maicians names
function show_magicians(magicians: String[]){
    magicians.forEach(name =>console.log(name)); 
        
    }
// Function to make magicians great through.map() it will modify the array

function make_great(magicians: string[]){
   return magicians.map(name => `The Great ${name}`);
}

    //Define an array of migicians names
let magicians_names = ["David Copperfield","Penn jillette", "Teller" ] 

// call make_great function to modify the magicians names
let great_magicians = make_great(magicians_names);

console.log(great_magicians);

// call show_magicians function to show the great magicians modified names
show_magicians(great_magicians);