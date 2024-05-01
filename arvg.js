function getavrg(assignment1,assignment2,assignment3)
{
    const total=assignment1+assignment2+assignment3;
    const avr =total/3;
    return avr;

}
const avr = getavrg (100,200,300);
console.log(avr);