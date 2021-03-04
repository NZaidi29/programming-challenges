// Exercise 1
function reduceFraction(num, den) {
  let gcd = 1;//greatest common denominator

  for(let i = Math.min(num,den); i>0 ; i--){//go from smallest of the 2 backwards

    if (num%i==0 && den%i==0){//if both divisible i is the gcd
      gcd = i;
      i=0;//ends the loop
    }
  }
    return [num/gcd, den/gcd];
}

// Exercise 2
function isMagicDate(day, month, year) {
    return day*month == year%100;//last 2 digits of year is the year modulus 100
}

// Exercise 3
function sublist(l) {
  let result=[[]];//declare sublist with a null list

  for(let i = 0; i<l.length;i++){//go from 0 to end
    for (let j = i; j<l.length; j++){//go from i to end
      let sublist = l.slice(i, j+1);//slice the sublist
      result.push(sublist);//add to the result
    }
  }
    return result;
}

// Exercise 4
function pigLatin(word) {
  let w=word.toLowerCase();//copy the word into lowercase

  const vowels='aeiou';//declare vowels
  let punc='';
  let result='';
  let firstChar=w.charAt(0);
  //find the punctuation
  let punctuation=w.match(/[^a-z]/g)//saves the punctuation to an array if null there was no punctuation
  if(punctuation != null){
    punc=punctuation.toString();//if there was punctuation turn it into a string
  }
  //remove the punctuation and extract the letters
  w=w.match(/[a-z]/g);
  w=w.join('');//turn the array of letters into a string again
  //go through the letters and find the first vowel
  for(i=0; i<w.length; i++){
    if(vowels.includes(w.charAt(i))){
      break;//break out of this for loop once the vowel is found, did not use i=w.length as I wanted to use i later on
    }
  }
  //if the first letter is a vowel
  if(i==0){
    result= w + 'way';//word + way
  }
  //if the first letter is a consonant
  else{
    result= w.slice(i) + w.slice(0,i) + 'ay';//first vowel to end of word + prefix before the first vowel + ay
  }
  //checking if first letter is a capital and restoring the capital by comparing first char of lowercase word(w) and the original input
  if(firstChar!==word.charAt(0)){//a!=A but a==a so would check if it was originally a capital
    let firstLetter=result.charAt(0);
    result = firstLetter.toUpperCase() + result.slice(1);//capitalise first letter of result and add the rest of the letters
}
  return result+punc//restore the punctuation in the returned result
}

// Exercise 5
function morseCode(message) {
  const code={
      'a':'.-',
      'b':'-...',
      'c':'-.-.',
      'd':'-..',
      'e':'.',
      'f':'..-.',
      'g':'--.',
      'h':'....',
      'i':'..',
      'j':'.---',
      'k':'-.-',
      'l':'.-..',
      'm':'--',
      'n':'-.',
      'o':'---',
      'p':'.--.',
      'q':'--.-',
      'r':'.-.',
      's':'...',
      't':'-',
      'u':'..-',
      'v':'...-',
      'w':'.--',
      'x':'-..-',
      'y':'-.--',
      'z':'--..',
      '1':'.----',
      '2':'..---',
      '3':'...--',
      '4':'....-',
      '5':'.....',
      '6':'-....',
      '7':'--...',
      '8':'---..',
      '9':'----.',
      '0':'-----'
    }

    let m=message.toLowerCase();//change the letters to lowercase as my code is lowercase
    m=m.match(/[a-z0-9]/g);//extracts all letters and numbers into an array so removes all punctuation which we do not need
    let result='';//declare the result

    for(i=0; i<m.length; i++){//loop through the letters in the array m and make a string of the morse code
      result += code[m[i]] +' ';
    }
    return result.trim()//trim off the whitespaces at either end
}

// Exercise 6
function int2Text(num) {
  const digits={
    '0':'zero',
    '1':'one',
    '2':'two',
    '3':'three',
    '4':'four',
    '5':'five',
    '6':'six',
    '7':'seven',
    '8':'eight',
    '9':'nine'
    }
  const tens={
    '2':'twenty',
    '3':'thirty',
    '4':'forty',
    '5':'fifty',
    '6':'sixty',
    '7':'seventy',
    '8':'eighty',
    '9':'ninety'
    }
  const teens={
    '10':'ten',
    '11':'eleven',
    '12':'twelve',
    '13':'thirteen',
    '14':'fourteen',
    '15':'fifteen',
    '16':'sixteen',
    '17':'seventeen',
    '18':'eighteen',
    '19':'nineteen'
    }

    let n=num;//copy the original number
    let number=n.toString();//easier to operate dictionary with a string for me

    let d=n%10;//digits(if 114 would give 4)
    let t=n%100;//if 114 would give 14
    t=(t-d)/10;//if t=14 this gives 14-4/10 which is 1

    let result='';

    if(n>99){//bigger than 99
      if(t!=0){
        if(t==1){//hundreds and teens
          result = digits[number.charAt(0)] + ' hundred ' + teens[number.charAt(1)+number.charAt(2)];
        }
        else{//hundreds and tens
          result = digits[number.charAt(0)] + ' hundred ' + tens[number.charAt(1)];
          if(d!=0){//hundreds, tens and digits
            result += ' ' + digits[number.charAt(2)];
          }
        }
      }
      else{//hundreds
        result = digits[number.charAt(0)] + ' hundred';
        if(d!=0){//hundreds and digits
          result += ' ' + digits[number.charAt(2)];
        }
      }
    }
    else{//less than 100
      if(t!=0){
        if(t==1){//teens
          result = teens[number.charAt(0)+number.charAt(1)];
        }
        else{//tens
          result= tens[number.charAt(0)];
          if(d!=0){//tens and digits
            result +=' ' + digits[number.charAt(1)];
          }
        }
      }
      else{//digits
        result= digits[number.charAt(0)];
      }
    }
    return result
}

// Exercise 7
function missingComment(filename) {
  //read in le file
  const fs=require("fs");
  const data=fs.readFileSync(filename, "utf8");
  //split into lines
  let lines=data.split("\n");
  //def the result
  let result=[];

  for(i=0; i<lines.length; i++){
    let line=lines[i];//save current line
    if (line.slice(0,9)=='function '){//check if defining a function
      let prevLine=lines[i-1];//save prev line
      if(prevLine.startsWith('//')==false){//if no comment save the name
        let name=line.slice(9);//delete the bit that says function
        name=name.split('(');//split into function name and rest
        result.push(name[0]);//add the name
      }
    }
  }
    return result
}

// Exercise 8
function consistentLineLength(filename, length) {
  //read in le file
  const fs=require("fs");
  const data=fs.readFileSync(filename, "utf8");
  //replace newline with whitespaces
  let text=data.replace(/\n/g," ");// the /\n/g replaces all instances whereas '\n' only replaces the first
  //declaring result
  let result=[];

  while(text.length>length){//as long as more than length chararcters left in text keeps looping
    for(i=length; i>0; i--){//works from character at index length backwards
      if(text.charAt(i)==' '){//find closest space to the desired length
        let line=text.slice(0,i);//cut off line at the space
        result.push(line);//add line to result
        text=text.slice(i+1);//remove line from text
        i=0;//condition to make break out of for loop which will then repeat due to the while loop
      }
    }
  }
  result.push(text.trim())//pushes the final line while removing trailing spaces from it
    return result
}

// Exercise 9
function knight(start, end, moves) {
    return undefined
}

// Exercise 10
function warOfSpecies(environment) {
    return undefined
}

module.exports = {
    reduceFraction: reduceFraction,
    isMagicDate: isMagicDate,
    sublist: sublist,
    pigLatin: pigLatin,
    morseCode: morseCode,
    int2Text: int2Text,
    missingComment: missingComment,
    consistentLineLength: consistentLineLength,
    knight: knight,
    warOfSpecies: warOfSpecies
}
