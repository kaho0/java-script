function reversedWords(str)
{
    const words=str.split(' ');
    console.log(words);
    const result=[];
    for(let i=words.length-1;i>=0;i--)
    {
        const element=words[i];
       result.push(element);
    }
    const reversed=result.join('');
    console.log(result);
}



const mystring='I am a good boy';
reversedWords(mystring);