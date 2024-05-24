// Creating an Array
let userNAmes = ["Mahad", "Ali", "Zeeshan","Admin", "Usman"];

// Using For.Each Loop on Array
userNAmes.forEach(oneUser => {
    if(oneUser === "Admin"){
        console.log(`Hello ${oneUser}, Would you like to see a status report?`);

    }else{
        console.log(`Hello ${oneUser}, Thankyou for logging in again ?`);
    }
})

