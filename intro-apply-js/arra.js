function getoddsum(numbers){
    let sum=0;
    for(let i=0;i<numbers.length;i++)
        {
           
            const element =numbers[i];
            console.log(i,element);
            if(element%2!=0)
                {
                    sum+=element;

                   
                }
        }
        // console.log(sum);
        return sum;
}
function oddprint(numbers){
    for(let i=0;i<numbers.length;i++)
        {
        const element=numbers[i];
        if(element%2==0)
            {
                console.log(i,element);
            }
        }

}
var arr=[5,7,8,10,45,30];
const odd=getoddsum(arr);
console.log(odd);
const oddnum=oddprint(arr);
console.log(oddnum);
