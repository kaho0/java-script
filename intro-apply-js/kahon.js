
function determineGender(username) {
    // Create a Set to store distinct characters
    const distinctCharacters = new Set(username);
    
    // Count the number of distinct characters
    const countDistinct = distinctCharacters.size;
    
    // Determine gender based on the count
    if (countDistinct % 2 === 0) {
        return "female";
    } else {
        return "male";
    }
}