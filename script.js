var capitalCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P' ,'Q', 'R', 'S', 'T' , 'U', 'V', 'W', 'X', 'Y', 'Z']
var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var specialCharacterArr = ['!', '@', '#', '$', '%', '^', '&', '*', '/', '-', '+', '(', ')', '[', ']', '{', '}', '<', '>', '?', '~']
var selectedCharacterArr = []
// Assignment Code
var generateBtn = document.querySelector("#generate");

//user prompts
function lengthPrompt() {
  var passwordLength = prompt("How many characters would you like the password to be? I offer 8-128 characters long.")
  if(passwordLength >= 8 && passwordLength <= 128) {
    return passwordLength
  }
  alert("Selected password length not allowed.")
  return lengthPrompt()
}

function determineNumber(){
  var randomNumber = Math.floor(Math.random() * numArr.length);
  var passwordNumber = numArr[randomNumber];
  return passwordNumber;
}

function determineCapitalCase() {
  var randomCapital = Math.floor(Math.random() * capitalCaseArr.length);
  var passwordCapital = capitalCaseArr[randomCapital];
  return passwordCapital;
}

function determineLowerCase() {
  var randomLower = Math.floor(Math.random() * lowerCaseArr.length);
  var passwordLower = lowerCaseArr[randomLower];
  return passwordLower;
}

function determineSpecialCharacter() {
  var randomSpecial = Math.floor(Math.random() * specialCharacterArr.length);
  var passwordSpecial = specialCharacterArr[randomSpecial];
  return passwordSpecial
}

function generatePassword() {
  selectedCharacterArr.length = 0
  passwordLength = lengthPrompt()

  var numberPrompt = confirm("Would you like numbers in your password?")
  if (numberPrompt === true) {
    selectedCharacterArr.push(determineNumber)
  } else if (numberPrompt === false) 
  {}

  var capitalPrompt = confirm("Would you like capital letters in your password?")
  if (capitalPrompt === true) {
    selectedCharacterArr.push(determineCapitalCase)
  } else if (capitalPrompt === false) 
  {}

  var lowerCasePrompt = confirm("Would you like lower case letters in your password?")
  if (lowerCasePrompt === true) {
    selectedCharacterArr.push(determineLowerCase)
  } else if (lowerCasePrompt === false) 
  {}

  var specialCharacterPrompt = confirm("Would you like special characters in your password?")
  if (specialCharacterPrompt === true) {
    selectedCharacterArr.push(determineSpecialCharacter)
  } else if (specialCharacterPrompt === false)
  {}
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
