let guestslist = ["Hamza", " Usman", " Ayesha", "Areeba"];

let guestcantmake = guestslist[0];

console.log(guestcantmake , " can't make it");

guestslist.splice(0, 1 ," Amir " );

guestslist.forEach(guest => console.log(`Assalamu alaikum ${guest}, would you like to have dinner with me?`));