var shopping={
    toiletTissue:10,
    honey:1,
    vinegar:1,
    pen:10,
    mouse:1
}
// console.log(shopping.pen);
// var penCount=shopping.pen;
var penCount2=shopping['pen'];
var properties=Object.keys(shopping);
var propertyvalues=Object.values(shopping);
// console.log(properties);
// console.log(properyvalues);
// var properties='mouse';
// var property=shopping[properties];
// console.log(properties,propertyvalues);
// shopping[properties]='books';
//3 ways to set property values
shopping.mouse=15;
console.log(shopping);
shopping['mouse']=19;
console.log(shopping);
shopping[properties]=89;
console.log(shopping);
