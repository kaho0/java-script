function findAddress(addressObj) {
    // Define default values for each property
    const flatNo = addressObj.flat_no || '__';
    const houseNo = addressObj.house_no || '__';
    const society = addressObj.society || '__';
    const city = addressObj.city || '__';
    const country = addressObj.country || '__';

    // Return the formatted address string
    return `${flatNo}, ${houseNo}, ${society}, ${city}, ${country}`;
}

// Example usage:
const address1 = {
    flat_no: "10",
    house_no: "15A",
    society: "Evergreen",
    city: "Springfield",
    country: "USA"
};

const address2 = {
    flat_no: "10",
    house_no: "15A",
    society: "Evergreen"
};

console.log(findAddress(address1)); // Output: "10, 15A, Evergreen, Springfield, USA"
console.log(findAddress(address2)); // Output: "10, 15A, Evergreen, __, __"
