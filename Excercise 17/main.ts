// Creating a guest list Array
let guestlist = ["Hamza", "Usman", "Ayesha", "Areeba"];

// making variable for those guest who are not coming
let guestcantmake = guestlist[ 0 ];

// Printing the name of the guest not coming
console.log(guestcantmake, "guestnotcoming ") ;

// Add or remove guest from the guest list Array
guestlist.splice(0, 1, "Amir");

// Print message for biiger table
console.log(" Good news we have found a bigger table for our dinners!");

// Adding a new guest at the starting index of Array
guestlist.unshift("Ali");

// Adding a new guest at ending index of Array
guestlist.push(" Zain ")

// Get a  middle index of our guest list Array
let middleindex: number = Math.floor(guestlist.length / 2)

// Adding a new guest at middle index of Array
guestlist.splice(middleindex, 0 ,"Osama");

// Printing the updated list of our guest
console.log ("Updated list of our guest");

// Sending a invitation message to our guest one by one by their names
guestlist.forEach(oneguest => console.log(`Assalamu Alaikum ${oneguest}, Would you like to have dinner with me?`));

// Inform the guest that only two guests can be invited for the dinner
console.log("unfortunately,dinner table wouldn't arrive on time, so i can only invite two guests for the dinner with me ");

// using while.loop to remove guests from the Array util only two names remains
while(guestlist.length > 2 ){
    let removedguest = guestlist.pop();
    console.log(`sorry ${removedguest} I can't invite you to dinner with me`);
}
// Sending invitation message to the last two guest  names on the guest list
console.log("invitation to the last 2 guests");
guestlist.forEach(lasttwo => console.log (`luckily ${lasttwo}, you are still invited to dinner`) );

// Removing last two guest names from the array
guestlist.pop();
guestlist.pop();
 
console.log("Empty list:", guestlist);
