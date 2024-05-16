const names=['Olivia',
    'Emma',
    "Charlotte",
    "Amelia",
    "Sophia",
   " Luna",
    "Sophia",
  "  Mia",
    "Isabella",
   " Ava",
    "Olivia",
   " Mia",
    "Isabella",
   " Ava",
    "Evelyn",
    "Luna",
    "Evelyn",
    "Luna"]
    function removeDUpli(names)
    {
        const unique=[];
        for(let i=0;i<=names.length;i++)
            {
                const name =names[i];
                if(unique.includes(name)==false)
                    {
                        unique.push(name);
                    }
            }
            return unique;
    }

    const uniqueNames=removeDUpli(names);
    console.log(uniqueNames);