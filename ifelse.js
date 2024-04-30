var scores=[85,66,95,56,40]; 
let grades=[];
for(let i=0;i<scores.length;i++)
{
 if(scores[i]>=80)
 {
    grades.push("A");

 }  
 else if(scores[i]>=60)
 {
    grades.push("B");

 }  
 else if(scores[i]>=50)
 {
    grades.push("C");

 }  
 else if(scores[i]>=40)
 {
    grades.push("D");

 }  
 else if(scores[i]>=39)
 {
    grades.push("F");

 }  

}
console.log("grades:",grades);
