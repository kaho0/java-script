const phone=[
    {
        name:'samsung',camera:12,storage:'32gb',price:3600},
    {
        name:'apple',camera:8,storage:'128gb',price:13600},
    {
        name:'oneplus',camera:10,storage:'3gb',price:4600},
    {
        name:'oppo',camera:10,storage:'20gb',price:2000},
    {
        name:'lg',camera:10,storage:'23gb',price:45500},
    {
        name:'Mi',camera:10,storage:'44gb',price:12000},
    
];
function cheapestPhones(phone)
{
    let min=phone[0];
  for(let i=0;i<phone.length;i++)
    {
        const phones =phone[i];
        console.log(phones);
        if(phones.price<min.price)
            {
                min=phones;
            }
    
    }
    return min;
}
function bestStorage(phone)
{
    let maxStorage=phone[0];
    for(let i=0;i<phone.length;i++)
        {
           const phones=phone[i];
            const maxStorageValue = parseInt(maxStorage.storage);
           const currentStorageValue = parseInt(phones.storage);
           if (currentStorageValue > maxStorageValue) {
               maxStorage = phones;
           }
       }
       return maxStorage;
   }
const mySelection=cheapestPhones(phone);
console.log("CHEAPEST:" ,mySelection);
console.log(bestStorage(phone));