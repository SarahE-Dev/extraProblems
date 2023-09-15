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



function countWords(str) {
  let newStr = ''
  let spaces = ' '
  for(let i=0; i < str.length; i++){
    let hasSpaces = spaces.indexOf(str[i]) !== -1
    if(hasSpaces === true){
      newStr += str[i]
    }
  }
  return newStr.length+1;
}

function containsDigit(str) {
  return str.includes('0') || str.includes('1') || str.includes('2') || str.includes('3') || str.includes('4') || str.includes('5') || str.includes('6') || str.includes('7') || str.includes('8') || str.includes('9')
  
}

function containsLowerCase(str) {
  let newStr = ''
  let lowercase = 'abcdefghijklmnopqrstuvwxyz'
  for(let i=0; i < str.length; i++){
    let islowercase = lowercase.indexOf(str[i]) !== -1
    if(islowercase === true){
      newStr += str[i]
    }
  }
  return newStr.length > 0
}
    
function containsUpperCase(str) {
  let newStr = '';
  let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for(let i=0; i < str.length; i++){
    let isuppercase = uppercase.indexOf(str[i]) !== -1
    if(isuppercase === true){
      newStr += str[i]
    }
  }
  return newStr.length > 0
}

function containsNonAlphanumeric(str) {
  let newStr = '';
  let nonalphanumeric = "() @?!' '";
  for(let i=0; i < str.length; i++){
    let isnonalphanumeric = nonalphanumeric.indexOf(str[i]) !== -1
    if(isnonalphanumeric === true){
      newStr += str[i]
    }
  }
  return newStr.length > 0
}

function containsSpace(str) {
  let newStr = ''
  let spaces = ' '
  for(let i=0; i < str.length; i++){
    let hasSpaces = spaces.indexOf(str[i]) !== -1
    if(hasSpaces === true){
      newStr += str[i]
    }
  }
  return newStr.length > 0;
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
  let str1 = '';
  let str2 = '';
  let str3 = '';
  let str4 = '';
  let str5 = '';
  let lowercase = 'abcdefghijklmnopqrstuvwxyz';
  let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let digits = '01234567890';
  let nonalphanumeric = "!@#$%&*()'";
  let space = ' '
  for(let i=0; i < str.length; i++){
    let haslower = lowercase.indexOf(str[i]) !== -1
    if(haslower === true){
      str1 += str[i]
    }
    let hasupper = uppercase.indexOf(str[i]) !== -1
    if(hasupper === true){
      str2 += str[i]
    }
    let hasdigits = digits.indexOf(str[i]) !== -1
    if(hasdigits === true){
      str3 += str[i]
    }
    let isnonalphanumeric = nonalphanumeric.indexOf(str[i]) !== -1
    if(isnonalphanumeric === true){
      str4 += str[i]
    }
    let hasspaces = space.indexOf(str[i]) !== -1
    if(hasspaces === true){
      str5 += str[i]
    }
  }
  if(str5.length > 0){
    return false
  }else if(str1.length > 0 && str2.length > 0 && str3.length > 0 && str4.length > 0){
    return true
  }else{
    return false
  }
}

function onlyPunchy(arr) {
  let newArr = [];
  let newArr2 = [];
  for(let i=0; i < arr.length; i++){
    if(arr[i].length < 15){
      newArr.push(arr[i])
    }
  for(let i=0; i < newArr.length; i++)
      for(let j=0; j < newArr[j].length; i++){
        if(newArr[j] === '!'){
          continue
        }else{
          newArr2.push(newArr[j] + '!')
        }
      }
  
}
return newArr2
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