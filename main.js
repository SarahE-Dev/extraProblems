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
}

function truncate() {
}

function isValidPassword() {
}

function onlyPunchy() {
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