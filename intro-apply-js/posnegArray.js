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