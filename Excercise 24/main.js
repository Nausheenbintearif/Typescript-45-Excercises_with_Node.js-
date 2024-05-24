// Defining variables
var apple = "apple";
var uppercaseApple = "APPLE";
var ten = 10;
var twenty = 20;
var fruits = ["apple", "banana", "orange"];
// Test for equality and inequality with string
console.log(" Is apple is equal to apple?");
console.log(apple == "apple");
console.log("\n Is apple is not equal to apple?");
console.log(apple != "apple");
// Tests using Lower case Functions
console.log("\n Is APPLE is equal to apple after converting to lower case?");
console.log(uppercaseApple.toLowerCase() == "apple");
console.log("\n Is APPLE is not equal to apple after converting to lower case?");
console.log(uppercaseApple.toLowerCase() != "apple");
// Numerical Tests
// Equal to
console.log("\n Is ten is equal to twenty?");
console.log(ten == twenty);
// Not equal to
console.log("\n Is ten is not equal to twenty?");
console.log(ten != twenty);
// greater than
console.log("\n Is ten is greater than zero?");
console.log(ten > 0);
// less than
console.log("\n Is twenty is less than 10?");
console.log(twenty < 10);
// greater than or equal to
console.log("\n Is ten is greater than or equal to 5?");
console.log(ten >= 5);
// less than or equal to
console.log("\n Is twenty is less than or equal to 10?");
console.log(twenty <= 10);
// Tests using "and" & "or" operators
// Using && operator (and)
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);
console.log("\n twenty is not equal to 10 and twenty is greater than 30");
console.log(twenty != 10 && twenty > 30);
// Using || operator (or)
console.log("\n twenty is not equal to 10 or twenty is greater than 10");
console.log(twenty != 10 || twenty > 10);
console.log("\n 20 is greater than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);
console.log("\n 20 is greater than 50 OR 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);
// Test whether item is included in Array
console.log("\n Is orange included in my fruits array?");
console.log(fruits.includes("orange"));
// Not included
console.log("\n Is orange  not included in my fruits array?");
console.log(!fruits.includes("orange"));
