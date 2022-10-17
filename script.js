// Assignment code here

 // Variables with strings for password characters
 
 // Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var randomNumber = Math.random()
  return Math.floor(min*(1 - randomNumber) + randomNumber*max)
  }

function getRandomAmount() {
  return list[randomInt(list.length)]
}


function generatePassword() { 
//1.prompt user for password criteria
//a. password length 8-128
//b.prompt if they want upercase, lowercase, special characters, numbers
//2. validate the input
//3. display password on page

  var userInput = window.prompt("How many characters would you like your password to be?")
  
  var passwordLength = parseInt(userInput)

    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      window.alert("Please enter a numberic value between 8-128 characters");
      return
    }
     
    var userLowercase= window.confirm("Would you like to include uppercase letters?")
    var userUppercase= window.confirm("Would you like to include lowercase numbers?")
    var userNumbers= window.confirm("Would you like to include numbers?")
    var userSymbols= window.confirm("Would you like to include symbols?")
    
    var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]
    var uppercaseList = ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z"]
    var numbersList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
    var symbolsList = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"]

    var userSelections = []

    if (userLowercase === true) {
      userSelections.push(lowercaseList)

    }
    if (userUppercase === true) {
      userSelections.push(uppercaseList)

    }
    if (numbersList === true) {
      userSelections.push(numbersList)

    }
    if (symbolsList === true) {
      userSelections.push(symbolsList)

    }
    
    var generatePassword = ""

    for(var i = 0; i < passwordLength; i++) {
       var randomAmountList = getRandomAmount(userSelections)   
       var randomCharacters = getRandomAmount(randomAmountList)
     console.log(userSelections)
      }




    }



  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
