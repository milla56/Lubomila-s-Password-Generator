// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var maxLength = 128;
var minLength = 12;

// Function to prompt user for password options

function getPasswordOptions() {
  var passwordLength = parseInt(prompt("How long does your password have to be,choose between 12 and 128 ?"));
  if (isNaN(passwordLength) === true || passwordLength < 12 || passwordLength > 128) {
    alert('Password length must be long between 12 and 128 characters. Please try again!');
    return;
  } else {
    var lowerCaseConfirm = confirm("Do you want lowercase characters in your password?");
    var upperCaseConfirm = confirm("Do you want uppercase character in your password?");
    var numbersConfirm = confirm("Do you want any numbers in your password?");
    var specialConfirm = confirm("Do you want any special characters?");
  };
  if (!lowerCaseConfirm && !upperCaseConfirm && !numbersConfirm && !specialConfirm) {
    alert('You must select at least one option. Please try again!');
    return;
  }
  let userInput = {
    passwordLength: passwordLength,
    specialConfirm: specialConfirm,
    numbersConfirm: numbersConfirm,
    lowerCaseConfirm: lowerCaseConfirm,
    upperCaseConfirm: upperCaseConfirm
  };
  console.log(userInput);
  return userInput;
}


// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];

}

// Function to generate password with user input
function generatePassword() {
 
 var userOptions = getPasswordOptions ();
 console.log (userOptions);
 var possibilities = [];
 if(userOptions.lowerCaseConfirm){
  possibilities = possibilities.concat(lowerCasedCharacters);
 }
 if(userOptions.upperCaseConfirm){
possibilities = possibilities.concat(upperCasedCharacters);
 } 
 if(userOptions.specialConfirm){
  possibilities = possibilities.concat(specialCharacters);
 }
 if (userOptions.numbersConfirm){
  possibilities = possibilities.concat(numericCharacters);
 }
 console.log(possibilities);

var passwordText = '';
for (var i=0; i<userOptions.passwordLength; i++){
  passwordText += getRandom(possibilities)
  console.log(passwordText)
}

return passwordText


  // return []
  //   .reduce((collection, item) => {
  //     if (upperCasedCharacters) collection.push(item);
  //     return collection;
  //   }, upperCasedCharacters)
  //   .reduce((collection, item) => {
  //     if (lowerCasedCharacters) collection.push(item);
  //     return collection;
  //   }, lowercase)
  //   .reduce((collection, item) => {
  //     if (numericCharacters) collection.push(item);
  //     return collection;
  //   }, numbers)
  //   .reduce((collection, item) => {
  //     if (specialCharacters) collection.push(item);
  //     return collection;
  //   }, symbols)
  //   .sort(() => Math.random() - 0.5)
  //   .slice(0, PASSWORD_LENGTH)
  //   .join('');
}



// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);