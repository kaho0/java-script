const nums=[1,2,3,4,5];
// for(i=0;i<nums.length;i++)
//     {
     
//     }
    for(const num of nums){
    console.log(num);
    }
 
    const nobab='siraj ud doula';
    for(const char of nobab){
        console.log(char);
    }
    const glass={
        name:'glass',
        color:'golden',
        price: 12,
        isCleaned:true
        //keys:values,
    };    
    for(const key in glass){
        const value=glass[key];
        console.log(key,value);
    }