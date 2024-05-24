var guestslist = ["Hamza", " Usman", " Ayesha", "Areeba"];
var guestcantmake = guestslist[0];
console.log(guestcantmake, " can't make it");
guestslist.splice(0, 1, " Amir ");
guestslist.forEach(function (guest) { return console.log("Assalamu alaikum ".concat(guest, ", would you like to have dinner with me?")); });
