// Creating a function with parameters which returns a value in string format
function city_country(City: string , Country: string): string {
    return(`${City} , ${Country}`);
}

// Calling the function and print the return value

console.log(city_country("Karachi", "Pakistan"));

console.log(city_country("Tokyo", "Japan"));

console.log(city_country("London", "England"));
