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

// Making a copy of array through .Slice() function
let copy_magicians_names = magicians_names.slice();

// Modify the copied array to include "The Great" with theeir names

let copy_great_magicians = make_great(copy_magicians_names);

// Show both arrays original and copied

// Original
console.log("Original array\n");
show_magicians(magicians_names);

// Copied

console.log("\nCopied array\n");
show_magicians(copy_great_magicians);