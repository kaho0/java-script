function cubeNumber(number)
{
    return number*number*number;
}
const tripple=cubeNumber(2);
console.log(tripple);

function matchFInder(str1,str2)
{
    return str1.includes(str2);
}
let str1='john';
let str2='ohn';
let result=matchFInder(str1,str2);

console.log(result);
console.log(matchFInder('javascript','code'));
console.log(matchFInder('peter','pen'));
console.log(matchFInder('javascript','code'));
console.log(matchFInder('javascript','code'));

function sortMaker(arr)
{
    if(!Array.isArray(arr)||arr.length!==2)
        {
            return "invalid";
        }

const [num1,num2]=arr;
if(num1<0||num2<0)
    {
        return "invalid";
    }
    return [Math.max(num1,num2),Math.min(num1,num2)];

}
console.log(sortMaker([5, 3]));    // Output: [5, 3]
console.log(sortMaker([3, 5]));    // Output: [5, 3]
console.log(sortMaker([-1, 5]));   // Output: invalid
console.log(sortMaker([5, -3]));   // Output: invalid
console.log(sortMaker([5]));       // Output: invalid
console.log(sortMaker([5, 3, 1])); // Output: invalid

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
console.log(findAddress(address2));


function canPay(arr, target) {
    let result = [];
    
    function findSubsets(arr, target, index, currentSubset) {
        if (target === 0) {
            result.push([...currentSubset]);
            return true;
        }
        if (target < 0 || index >= arr.length) return false;

        // Include the current element and check
        currentSubset.push(arr[index]);
        findSubsets(arr, target - arr[index], index + 1, currentSubset);
        currentSubset.pop();

        // Exclude the current element and check
        findSubsets(arr, target, index + 1, currentSubset);
    }

    findSubsets(arr, target, 0, []);
    return result.length > 0 ? result : false;
}

// Test cases
console.log(canPay([1, 2, 3], 5)); // Output: false
console.log(canPay([1, 5, 9, 10], 10)); // Output: [ [ 10 ] ]
console.log(canPay([2, 3, 5, 6, 8], 8)); // Output: [ [ 3, 5 ], [ 8 ] ]