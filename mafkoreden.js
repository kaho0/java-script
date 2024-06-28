const numbers=[2,3,4,5,6,7,8,9];
function doubleIt(num){
    console.log('num now',num);
    return num*8;
}

const result=numbers.map(doubleIt);
console.log(result);

const double2=n=>n*2;
const output=numbers.map(double2);
console.log(output);

const out=numbers.map(n=>n*2);
console.log(out);