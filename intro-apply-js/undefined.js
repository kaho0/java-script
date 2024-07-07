function rearrangeSum(s) {
    // Split the string by '+' to get the numbers
    let numbers = s.split('+').map(Number);
    
    // Sort the numbers
    numbers.sort((a, b) => a - b);
    
    // Join the sorted numbers with '+'
    return numbers.join('+');
}

// Example usage:
let input = "3+2+1";
console.log(rearrangeSum(input)); // Output: "1+2+3"
