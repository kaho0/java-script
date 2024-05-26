const shoppingCar=[
    {name:'shoe',price:1200},
    {name:'book',price:223},
    {name:'pen',price:20},
    {name:'dress',price:2200},
    {name:'hizab',price:220},
    {name:'pin',price:10},

];
 function totalCost(products)
 {
    let sum=0;
    for(let i=0;i<products.length;i++)
        {
            const product=products[i];
            sum+=product.price;
            console.log(product);
        }
        return sum;

 }
 const expense=totalCost(shoppingCar);
 console.log(expense); 