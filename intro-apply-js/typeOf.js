const country='Bangladesh';
const age=23;
const isIndependant=true;
const student ={id:121,class:11,name:'agun'};
const friends=[12,34,5,6,43,2,3];
function add(n1,n2)
{
    return n1+n2;
}
console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependant);
console.log(typeof student);
console.log(typeof add);
console.log(Array.isArray(friends));
// if(friends.indexOf(19)!=-1)
//     {

//     }
console.log(friends.includes(19));
const newAge=[12,43,23];
const allAge=newAge.concat(friends);
console.log(allAge);
