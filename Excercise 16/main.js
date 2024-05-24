// Creating a guest list Array
var guestlist = ["Hamza", "Usman", "Ayesha", "Areeba"];
// making variable for those guest who are not coming
var guestcantmake = guestlist[0];
// Printing the name of the guest not coming
console.log(guestcantmake, "guestnotcoming ");
// Add or remove guest from the guest list Array
guestlist.splice(0, 1, "Amir");
// Print message for biiger table
console.log(" Good news we have found a bigger table for our dinners!");
// Adding a new guest at the starting index of Array
guestlist.unshift("Ali");
// Adding a new guest at ending index of Array
guestlist.push(" Zain ");
// Get a  middle index of our guest list Array
var middleindex = Math.floor(guestlist.length / 2);
// Adding a new guest at middle index of Array
guestlist.splice(middleindex, 0, "Osama");
// Printing the updated list of our guest
console.log("Updated list of our guest");
// Sending a invitation message to our guest one by one by their names
guestlist.forEach(function (oneguest) { return console.log("Assalamu Alaikum ".concat(oneguest, ", Would you like to have dinner with me?")); });
