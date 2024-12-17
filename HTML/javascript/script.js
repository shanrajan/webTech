//common predefined functions in javaScript
let s1=`09AZaz`
console.log("initialized Sting: "+s1);
console.log("initialized Sting to upper case: "+s1.length);//used to find length
console.log("initialized Sting to upper case: "+s1.toUpperCase());//used to make all upper case
console.log("initialized Sting to lower case: "+s1.toLowerCase());//used to make all lower case
for(let i=0;i<s1.length;i++){
    console.log(s1.charAt(i));//charAt is used to go to string and return the character letter by letter
}
for(let i=0;i<s1.length;i++){
    console.log(s1.charAt(i)+"-"+s1.charCodeAt(i));//charCodeAt is used to go to string and return the character's ASCII value letter by letter
}

let s2=`javascript is OOP language ! , javascript is easy to learn`;
console.log(s2);

console.log(s2.replace(`javascript`,`typescript`));//"replace is used to replace or update the word that was present in sentance - it will only replace the word that came first "

console.log(s2.replaceAll(`javascript`,`typescript`));//"replace is used to replace or update the word that was present in sentance - it will replace all the word that have to replace in sentance

let s3=`java`;
let s4=`script`;
console.log(s3);

console.log(s4);
console.log("concatination: "+(s3+s4));
console.log("conctination: "+(s3.concat(s4)));

let s5=`javascript`;
console.log(s5);
console.log("Substring from s to remaining all: "+s5.substring(4));
console.log("Substring from 0 to 4: "+s5.substring(0,4));

let s6=`javascript`;

