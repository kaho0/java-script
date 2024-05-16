const lyrics ="tumi bondhu kala pakhi ami jeno ki boshonto kale tmare bhulte parini";
const searchstring ='pakHI';
console.log(searchstring);
const lyricsStringLower=lyrics.toLowerCase();
const searchStringLower=lyrics.toLowerCase();
const doesexist=lyricsStringLower.includes(searchStringLower);
console.log(doesexist);
console.log(lyrics.indexOf('kala'));
console.log(lyrics.indexOf('tumi'));
if(lyrics.indexOf('sada')!==-1)
    {
        console.log('exists inside the string');
    }
    else 
    {
        console.log('cant find');
    }
    //starts with
   console.log(lyrics.startsWith('tumi'));
   //ends with
   console.log(lyrics.endsWith('sada'));