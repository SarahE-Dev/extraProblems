function isEvenlyDivisible(num1, num2) {
  if(num1 % num2 === 0){
    return true;
  }else{
    return false
  }
}

function halfSquare(num) {
  let x = num ** 2 * .5 
  return x;
}

function isLong(str) {
  if(str.length >= 15){
    return true
  }else{
    return false
  }
}

function exclaim(str) {
  if(str[str.length-1] !== '!'){
    return str += '!'
  }else{
    let myStr = str.substring(0,str.indexOf('!')+1)
    return myStr
  }

  }


function countWords(str){
  let spaces = 0;
  for(let char of str){
    if(char === ' '){
      spaces += 1;
    }
  }
  return spaces + 1;
}
  
// }
function containsDigit(str){
  let numberOfDigits = 0;
  let digits = '0123456789';
  for(let char of str){
    let hasDigits = digits.indexOf(char) !== -1
    if(hasDigits === true){
      numberOfDigits += 1;
    }
  }
  return numberOfDigits > 0;
}

function containsLowerCase(str) {
  let numberOfLowercase = 0;
  let lowercase = 'abcdefghijklmnopqrstuvwxyz'
  for(let i=0; i < str.length; i++){
    let islowercase = lowercase.indexOf(str[i]) !== -1
    if(islowercase === true){
      numberOfLowercase += 1;
    }
  }
  return numberOfLowercase > 0;
}
    
function containsUpperCase(str) {
  let numberOfUppercase = 0;
  let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for(let i=0; i < str.length; i++){
    let isuppercase = uppercase.indexOf(str[i]) !== -1
    if(isuppercase === true){
      numberOfUppercase += 1;
    }
  }
  return numberOfUppercase > 0;
}

function containsNonAlphanumeric(str) {
  let numberOfNonalpha = 0;
  let nonalphanumeric = "() @?!' '";
  for(let i=0; i < str.length; i++){
    let isnonalphanumeric = nonalphanumeric.indexOf(str[i]) !== -1
    if(isnonalphanumeric === true){
      numberOfNonalpha += 1;
    }
  }
  return numberOfNonalpha > 0
}

function containsSpace(str) {
  let hasSpaces = 0
  for(let char of str){
    if(char === ' '){
      hasSpaces += 1
    }
  }
  return hasSpaces > 0;
}

function digits(num) {
  if(num >= 0){
  }else if(num < 0){
    num *= -1
  }
  let numStr = String(num);
  let numArr = numStr.split('');
  let lastArr = [];
  for(let i=0; i < numArr.length; i++){
    if(numArr[i] === '.'){
      continue;
    }else{
      lastArr += numArr[i]
    }
  }
  let numbers = lastArr.split('')
  let answer = numbers.map(Number)
  return answer;
}

function truncate(str) {
  let newStr = '';
  if(str.length >= 15){
    for(let i = 0; i < 8; i++){
      newStr += str[i]
    }
    return newStr + '...'
  }else{
    return str;
  }
  
}

function isValidPassword(str) {
  let lowercaseCount = 0;
  let uppercaseCount = 0;
  let digitsCount = 0;
  let nonalphaCount = 0;
  let spaceCount = 0;
  let lowercase = 'abcdefghijklmnopqrstuvwxyz';
  let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let digits = '01234567890';
  let nonalphanumeric = "!@#$%&*()'";
  let space = ' '
  for(let i=0; i < str.length; i++){
    let haslower = lowercase.indexOf(str[i]) !== -1
    if(haslower === true){
      lowercaseCount += 1;
    }
    let hasupper = uppercase.indexOf(str[i]) !== -1
    if(hasupper === true){
      uppercaseCount += 1;
    }
    let hasdigits = digits.indexOf(str[i]) !== -1
    if(hasdigits === true){
      digitsCount += 1;
    }
    let isnonalphanumeric = nonalphanumeric.indexOf(str[i]) !== -1
    if(isnonalphanumeric === true){
      nonalphaCount += 1;
    }
    if(str[i] === ' '){
      spaceCount += 1;
    }
  }
  if(spaceCount > 0){
    return false
  }else if(uppercaseCount > 0 && lowercaseCount > 0 && digitsCount > 0 && nonalphaCount > 0){
    return true
  }else{
    return false
  }
}

function onlyPunchy(arr) {
    let titles = [];
    let titlesWithExclamations = []
    for(let i=0; i < arr.length; i++){
      titles.push('');
      for(let j=0; j < arr[i].length; j++){
        if(arr[i][j] !== '!'){
         titles[i] += arr[i][j]
        }
      }
    }
    for(let i=0; i < titles.length; i++){
      if(titles[i].length < 15){
        titlesWithExclamations.push(titles[i] + '!')
      }
    }
    return titlesWithExclamations;

}


module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}