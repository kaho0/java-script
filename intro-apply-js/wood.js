function woodCalculator(chairQUantity,tableQuantity,bedQuantity)
{
    const perChairWood=3;
    const perTableWood=10;
    const perBedWood=50;
    console.log(chairQUantity,tableQuantity,bedQuantity);
    const chairWood=chairQUantity*perChairWood;
    const tableWood=tableQuantity*perTableWood;
    const bedWood=bedQuantity*perBedWood;
    const totalWood=chairWood+tableWood+bedWood;
    return totalWood;

}
const totalWood=woodCalculator(2,2,5);
console.log(totalWood);