
function factorial(num){
    var fact=1;
for(let i=1;i<=num;i++)
    {
     fact =fact*i;
    }
    return fact;
}   
function fact2(num){
    var fact=1;
    for(let i=num;i>=1;i--)
        {
            fact =fact*i;
        }
        return fact;
}
function fact3(num){
    var fact=1;
    while(num!=0)
        {
            fact =fact*num;
            num--;
        }
        return fact;

}
    var fact=factorial(9);
    console.log(fact);
    var fact2rial=fact2(9);
    console.log(fact2rial);
    var factu=fact3(9);
    console.log(factu);
