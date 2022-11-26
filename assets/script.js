var generateBtn = document.querySelector("#generate");

var lowercase = 'abcdefghijklmnopqrstuvwxyz'; 
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var special = '!@#$%^&*';
var numbers = '0123456789';
var possChars = ''; // variable to hold all the possible characters according to the character types the user chose
var requiredChars = ''; // variable to hold a random character from each character type to ensure that at least one character from each desired list is in the final password
var fillMissing = ''; // variable to hold the remaining # of missing characters
var finalPass = ''; // variable to hold the final password



function generatePassword() {
  let passLength = parseInt(
    prompt("How long would you like your password? Please choose a number between 8 and 128.")
  );

  if (isNaN(passLength) || passLength < 8 || passLength > 128) {
    alert("Chosen length is outside of given range, please try again")
    generatePassword();
  } else {
    alert("Your password will be " + passLength + " characters long.");
  }

  //user options
  var includeLowercase = confirm("Would you like lowercase characters to be in your password?");
  var includeUppercase = confirm("Would you like uppercase characters to be in your password?");
  var includeSpecial = confirm("Would you like special characters to be in your password?");
  var includeNumbers = confirm("Would you like numbers to be in your password?");

  if (!includeLowercase && !includeUppercase && !includeSpecial && !includeNumbers) {
    alert("Please include at least one character type");
    return null;
  }

  if (includeLowercase) {
    possChars += lowercase;
    requiredChars += lowercase.charAt(Math.floor(Math.random() * lowercase.length));
  }
  if (includeUppercase) {
    possChars += uppercase;
    requiredChars += uppercase.charAt(Math.floor(Math.random() * uppercase.length));
  }
  if (includeSpecial) {
    possChars += special;
    requiredChars += special.charAt(Math.floor(Math.random() * special.length));
  }
  if (includeNumbers) {
    possChars += numbers;
    requiredChars += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }

  var missingChars = (passLength) - (requiredChars.length);
  for (let i = 0; i < missingChars; i++) {
    fillMissing += possChars.charAt(Math.floor(Math.random() * possChars.length));
  }

  finalPass += requiredChars + fillMissing;
  return finalPass;
  console.log(finalPass);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
