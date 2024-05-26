function onlyPos(number)
{
    for(let i=0;i<number.length;i++)
        {
            if(number[i]<0)
                {
                    break;
                }
                else 
                {
                    console.log(number[i]);
                }
        }
}
const number=[12,32,43,45,65,-32,45,66,7,6,3,-2];
onlyPos(number);