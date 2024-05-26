function biggestName(name)
{
 if (name.length==0)
    return null;
let longest=name[0];
for(let i=0;i<name.length;i++)
    {
        if(name[i].length>longest.length)
            {
                longest=name[i];
            }
    }
    return longest;
}
const name=['jhinku','tinku','rinku','danku','blabla','chrisstu'];
const biggest=biggestName(name);
console.log(biggest);