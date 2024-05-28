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