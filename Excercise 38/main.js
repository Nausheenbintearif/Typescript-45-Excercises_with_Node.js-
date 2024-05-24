// Describing a function
function describe_city(City, Country) {
    if (Country === void 0) { Country = "Pakistan"; }
    console.log("".concat(City, " is in ").concat(Country));
}
// Calling a function
describe_city("Karachi");
describe_city("Islamabad");
describe_city("Berlin", "Germany");
