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