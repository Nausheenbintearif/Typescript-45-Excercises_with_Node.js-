//Array of current users
var current_users = ["Usman", "ali", "Areeba", "Zain", "Osama"];
//Array of new users
var new_users = ["Hamza", "Ayesha", "Ali", "Mahad", "Areeba"];
// Loop through new_users to check for usernames availabilities.
new_users.forEach(function (new_one_user) {
    // Making a condition for username already exists and save in our_condition variable
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    // Pinting different messages using If-Else statement
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This Username  ".concat(new_one_user, " is available!"));
    }
});
