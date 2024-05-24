"use strict";
// Making a function
function make_shirt(size = "Large", PrintMessage = "I Love Typescript") {
    console.log(`Creating a ${size} shirt with ${PrintMessage} print on shirt`);
}
// Calling a function with by-default values
make_shirt();
// Calling a function with by-default message and medium size
make_shirt("Medium");
// Calling a function with Small size and print a different message
make_shirt("Small", "I Love JavaScript");
