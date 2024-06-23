const getAge=(person)=>person.age;
const student={
    name:'ananta',age:45
}
const age = getAge(student);
console.log(age);


const getThird=numbers=>numbers[4];
const third=getThird([3,2,4,5,6])
console.log(third);

const getPI = ()  =>Math.PI;
console.log(getPI());