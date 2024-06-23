const glass={
    name:'glass',
    color:'golden',
    price: 12,
    isCleaned:true
    //keys:values,
};

console.log(glass);
const keys=Object.keys(glass);
console.log(keys);
const values=Object.values(glass);
console.log(values);

const pair=Object.entries(glass);
console.log(pair);

// const {isCleaned,...shortGlass}=glass;
// console.log(shortGlass);
