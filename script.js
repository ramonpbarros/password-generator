// Assignment Code
var generateBtn = document.querySelector("#generate");
//create array for new password that will be genarated
var newPassword = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w"
];
//create array with special characters
const specialCharacters = "!@#$%^&*()";

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// TODO: Write code so the generatePassword returns a string for a password
// which meets the requirements in the instructions.
function generatePassword() {

  //prompt user  asking how many characters he wants for his new password
  var passwordLength = prompt("Please enter the number of characters you want for your new password.  It must be at least 8 but less than 128.");

  //IF the length is between 8 and 128 than set the input to the array length
  if (passwordLength > 7 && passwordLength < 128) {
    newPassword.length = passwordLength;

    //IF does not meet this criteria then alert user
  } else {
    alert("Password must be at least 8 but less than 128!");
    return "";
  }

  //create a pop-up confirm asking if user wants numbers in password
  var numbers = confirm("Do you want numbers in your password?");
  // checl IF answer is true
  if (numbers === true) {
    for (var i = 0; i < newPassword.length; i++) {
      var optionsOfLettersI = (newPassword[i] === "c") ||
        (newPassword[i] === "f") ||
        (newPassword[i] === "j") ||
        (newPassword[i] === "n") ||
        (newPassword[i] === "r") ||
        (newPassword[i] === "u") ||
        (newPassword[i] === "y");
      if (optionsOfLettersI) {
        newPassword.splice(Math.floor(Math.random() * newPassword.length), 1, Math.floor(Math.random() * 10));
      }
    }
  }

  var lowerCases = confirm("Do you want lowercases in your password?");
  var upperCases = confirm("Do you want uppercases in your password?");

  if (lowerCases === true && upperCases === true) {
    //make some indexes upcase
    for (var j = 0; j < newPassword.length; j++) {
      var optionsOfLettersJ = (newPassword[j] === "b") ||
        (newPassword[j] === "e") ||
        (newPassword[j] === "i") ||
        (newPassword[j] === "m") ||
        (newPassword[j] === "q") ||
        (newPassword[j] === "t") ||
        (newPassword[j] === "x");
      if (typeof newPassword[j] === "string" && optionsOfLettersJ) {
        newPassword[j] = newPassword[j].toUpperCase();
      }
    }
  } else if (lowerCases === false && upperCases === false) {
    //alert user that since he didnt want lowercase password will be generated w upercase letters
    alert("Since you did not want any lowercase characters password will be generated with upercase characters only!");
    //make all indexes upercase
    for (var k = 0; k < newPassword.length; k++) {
      if (typeof newPassword[k] === "string") {
        newPassword[k] = newPassword[k].toUpperCase();
      }
    }
  } else if (lowerCases === false && upperCases === true) {
    //make all indexes upercase
    for (var l = 0; l < newPassword.length; l++) {
      if (typeof newPassword[l] === "string") {
        newPassword[l] = newPassword[l].toUpperCase();
      }
    }
  } else {
  lowerCases === true && upperCases === false
    //dont do anything
  }

  var special = confirm("Do you want special characters in your password?");
  if (special === true) {
    for (var m = 0; m < newPassword.length; m++) {
      var optionsOfLettersM = (newPassword[m] === "a") ||
        (newPassword[m] === "d") ||
        (newPassword[m] === "h") ||
        (newPassword[m] === "l") ||
        (newPassword[m] === "p") ||
        (newPassword[m] === "s") ||
        (newPassword[m] === "w");
      if (optionsOfLettersM) {
        newPassword.splice(Math.floor(Math.random() * newPassword.length), 1, specialCharacters[Math.floor(Math.random() * 10)]);
      }
    }
    console.log(newPassword);
  }

  newPassword = newPassword.join("");
  return newPassword;
}
