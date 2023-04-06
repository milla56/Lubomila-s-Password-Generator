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
  var passwordLenght = parseInt(prompt("How long does your password have to be,choose between 12 and 128 ?"));
  if (isNaN(passwordLenght) === true || passwordLenght < 12 || passwordLenght > 128) {
    alert('Password length must be a NUMBER between 12 and 128. Please try again.');
    return;
  } else {
    var lowerCaseConfirm = confirm("Do you want lowercase characters in your password?");
     var upperCaseConfirm = confirm("Do you want uppercase character in your password?");
     var numbersConfirm = confirm("Do you want any numbers in your password?");
     var specialConfirm = confirm ("Do you want any special characters?");
  };
  if (!lowerCaseConfirm && !upperCaseConfirm && !numbersConfirm && !specialConfirm) {
    alert('You must select at least one option. Please try again!');
    return;
}
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

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

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