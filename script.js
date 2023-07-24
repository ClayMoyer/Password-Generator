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



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
