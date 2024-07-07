let students={
    "222":{
        name:'jack',
        class:'IX',
    adress:{
        "building no":12,
        "city":"wunderbar",
    }    }
}
console.log(students["222"].adress.city);

let data2={
    data:[
        {
            bookId:1,
            bookDetails:{
                name:'habluder adda',
                category:'xyz'
            }
        }
    ]
}
console.log(data2.data[0].bookDetails.name);

let oddArray = [1, 3, 5, 7, 9];
let evenArray = oddArray.map(num => num + 1);

console.log(evenArray); // Output: [2, 4, 6, 8, 10]

const instructors = [
    {name: 'Nodi', age: 28, position: 'Senior'},
    {name: 'Akil', age: 26, position: 'Junior'},
    {name: 'Shobuj', age: 30, position: 'Senior'}
  ];
  
  const seniorInstructors = instructors.filter(instructor => instructor.position === 'Senior');
  
  seniorInstructors.forEach(instructor => console.log(instructor.name));