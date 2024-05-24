let userNames = ["Mahad","Ali", "Zeeshan", "Admin", "Usman"];

userNames = []
if(userNames.length === 0){
    console.log("your Array is empty, We need to find some users!");
}else{
// Using For.Each Loop on Array
userNames.forEach(oneUser =>{
    if(oneUser === "Admin"){
        console.log(`Hello ${oneUser}, Would you like to see a status report?`);

    }else{
        console.log(`Hello ${oneUser}, Thankyou for logging in again ?`);
    }
})
}