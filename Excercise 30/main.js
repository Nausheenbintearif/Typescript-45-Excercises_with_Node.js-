// Creating an Array
var userNAmes = ["Mahad", "Ali", "Zeeshan", "Admin", "Usman"];
// Using For.Each Loop on Array
userNAmes.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ", Would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", Thankyou for logging in again ?"));
    }
});
