var generateBtn = document.querySelector("#generate");

var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var special = '!@#$%^&*';
var numbers = '0123456789';



function generatePassword() {
  let passChar = ' ';
  
  let passLength = parseInt(
    prompt("How long would you like your password? Please choose a number between 8 and 128.")
    );

  if (passLength < 8 || passLength > 128) {
    alert("Chosen length is outside of given range, please try again")
  } else {
    
  }



}


generatePassword();













function randomLowercaseChars() {
  let randomLowercase = ' ';
  let lowercaseLength = lowercase.length;
  for (let i = 0; i < lowercaseLength; i++) {
    randomLowercase += lowercase.charAt(Math.floor(Math.random() * lowercaseLength))
  }
    return randomLowercase; 
}
console.log(randomLowercaseChars());

function randomUppercaseChars() {
  let randomUppercase = ' ';
  let uppercaseLength = uppercase.length;
  for (let i = 0; i < uppercaseLength; i++) {
    randomUppercase += uppercase.charAt(Math.floor(Math.random() * uppercaseLength))
  }
    return randomUppercase; 
}
console.log(randomUppercaseChars());

function randomSpecialChars() {
  let randomSpecial = " ";
  let specialLength = special.length;
  for (let i = 0; i < specialLength; i++) {
    randomSpecial += special.charAt(Math.floor(Math.random() * specialLength))
  }
  return randomSpecial;
}
console.log(randomSpecialChars());

function randomNumberChars() {
  let randomNumbers = ' ';
  let numbersLength = numbers.length;
  for (let i = 0; i < numbersLength; i++) {
    randomNumbers += numbers.charAt(Math.floor(Math.random() * numbersLength))
  }
    return randomNumbers;
}
console.log(randomNumberChars());











// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// //

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
