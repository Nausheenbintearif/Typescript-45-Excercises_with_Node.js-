// Making an Array of Countries and print them in original order 
let countriestovisit:string[] = ["Saudia Arabia","Turkey","Qatar","Bangladesh","Maldives"];
console.log("original order: ", countriestovisit);

// Print the Array in alphabetical order without modifying the actual Array list
console.log("Alphabetical order:" ,[...countriestovisit].sort());

// sow that the Array is still in the original order
console.log("Still in original order: ", countriestovisit);

// Printn the Array in reverse order without modifying the actual Array list
console.log("Reverse order: ",[... countriestovisit].reverse());

// sow that the Array is still in the original order
console.log("Still in original order: ", countriestovisit);

// We have changed the original Array order now
console.log("Original Array Reversed", countriestovisit.reverse());

// Print the Array to show that it's back to it's original order
console.log("Back to original order: ", countriestovisit.reverse());

// Print the Array to show that it's  order has been changed to Alphabetical order
console.log("Sorted in Alphabetical order: ", countriestovisit.sort());

// We have changed again the original Array order now in reverse order again
console.log("Original Array Reversed", countriestovisit.reverse());