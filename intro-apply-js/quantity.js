const shoppingCar=[
    {name:'shoe',price:1200,quantity:5},
    {name:'book',price:223,quantity:2},
    {name:'pen',price:20,quantity:3},
    {name:'hizab',price:220,quantity:5},
    {name:'pin',price:10,quantity:1},
    {name:'dress',price:2200,quantity:2},

];
 function totalCost(products)
 {
    let sum=0;
    for(let i=0;i<products.length;i++)
        {
            const product=products[i];
            const productTOtal=product.price*product.quantity;
            sum+=productTOtal;
            console.log(productTOtal);
        }
        return sum;

 }
 const expense=totalCost(shoppingCar);
 console.log(expense); 