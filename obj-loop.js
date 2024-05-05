var shoppingCart={
    books:10,
    sunglass:2,
    umbrella:4,
    waterbottle:2,
    pen:10,
    shoes:2,
    mouse:1,
    laptop:1
}
// var shoppingItems =['books','sunglass','shoes','pen']
const keys=Object.keys(shoppingCart);
// console.log(keys);
const values=Object.values(shoppingCart);
// console.log(values);
for(var i=0;i<values.length;i++)
{
     console.log(keys[i])
     console.log(shoppingCart)
    var propertyName=keys[i];
    var propertyValue=shoppingCart[propertyName];
  console.log(propertyName,propertyValue);
}
for(var propertyName in shoppingCart){
    const values=shoppingCart[propertyName];
    console.log(propertyName,values);
}