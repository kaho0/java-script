const lyrics ="tumi bondhu kala pakhi ami jeno ki boshonto kale tmare bhulte parini";
const parts =lyrics.split(' ');
const sentences =lyrics.split('.');
const chars =lyrics.split('  ');
console.log(parts);
console.log(chars);
console.log(sentences);
const partial =lyrics.slice(5,8);
const partial2=lyrics.substring(5,8);
console.log(partial);
console.log(partial2);
console.log(lyrics.trim());

const lines=[
    'tumi bondhu kala pakhi ami jeno ki',
    'boshonto kale tmre bolte pari ni',
    'kala kala sada sada'
];
console.log(lines.join(';  '));