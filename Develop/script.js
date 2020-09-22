// user input variables
var passwordElement = document.getElementById("password");
var btnElement = document.getElementById("generate");
var copybtnElement = document.getElementById("copy-pass")

var passLength;
var isNumber;
var isSpecial;
var isUpper;
var isLower;
var passChoice;
// arrays holding possible variable values

alphaLower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
alphaUpper = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
special = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  " < ",
  "=",
  " > ",
  " ? ",
  "@",
  "[",
  "\\",
  "]",
  " ^ ",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
// creates an empty array that will fill with variable arrays based on user input
var availableCharacters = [];
// begins the function to generate password
function generatePass() {
  passLength = parseInt(
    prompt(
      "How long do you want your password to be? Password must be between 8 and 128 characters."
    )
  );
  // below code runs if the user has no input
  if (!passLength) {
    alert("You must input a value!");
  } // below code runs if the input is not between 8 and 128
  else if (passLength < 8 || passLength > 128) {
    alert("Your password must be between 8 and 128 characters!");
  } // below code runs if the user inputs a number between 8 and 128
  else {
    // asking if user wants to use numbers
    isNumber = confirm("Do you want numbers in your password?"); 
    // IF the user wants numbers, the array is stored in availableCharacters
    if (isNumber) {
      availableCharacters.push(number);
    }
    isSpecial = confirm("Do you want special characters in your password?");
    if (isSpecial) {
      availableCharacters.push(special);
    }
    isUpper = confirm("Do you want uppercase letters in your password?");
    if (isUpper) {
      availableCharacters.push(alphaUpper);
    }
    isLower = confirm("Do you want lowercase letters in your password?");
    if (isLower) {
      availableCharacters.push(alphaLower);
    }
    if (!isNumber && !isSpecial && !isUpper && !isLower) {
      alert("You must choose a criteria!");
    } else { // looping through to create a password based on the length the user picks
      var randomPassword = "";
      for (let i = 0; i < passLength; i++) {
        // the has picked between 1 to 4 options and we decide which type of character to use at each position in the password.
        var randomCharacterArrayIndex = Math.floor(Math.random() * availableCharacters.length);
        // randomCharacterArray is the random generated array from which is either special or alphaLower
        var randomCharacterArray = availableCharacters[randomCharacterArrayIndex];
        // randomly picks the index of one of the characters of the array
        var randomIndex = Math.floor(Math.random() * randomCharacterArray.length);
        var randomCharacter = randomCharacterArray[randomIndex];
        randomPassword = randomPassword + randomCharacter;
      }
      passwordElement.textContent = randomPassword;
    }
  }

  
};
// calls the function when the button is clicked 
btnElement.addEventListener("click", function() {
  generatePass();
});



