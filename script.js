// Assignment code here
//CHARACTER OPTIONS FOR PASSWORD//
    var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]
    var uppercaseList = ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z"]
    var numbersList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
    var symbolsList = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"]
var generatedPassword = ""; 
 
//FUNCTION IN ORDER TO CREATE A PASSWORD//
function generatePassword() {   
  var passwordLength = prompt("How many characters would you like your password to be?");
//IF USER DOESNT MEET CRITERIA A WINDOW WILL ALERT THE USER TO MAKE ADJUSTMENTS//
    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      alert("Please enter a numberic value between 8-128 characters");
    }
     
    var userLowercase = window.confirm("Would you like to include uppercase letters?")
    var userUppercase = window.confirm("Would you like to include lowercase numbers?")
    var userNumbers = window.confirm("Would you like to include numbers?")
    var userSymbols = window.confirm("Would you like to include symbols?")
    

    var userSelections = [];
  
  
    if (userLowercase === true) {
      
      userSelections = userSelections.concat(lowercaseList)
      }
     
     if (userUppercase === true) {
      
        userSelections = userSelections.concat(uppercaseList)
        }
   if (userSymbols === true) {
      
          userSelections = userSelections.concat(symbolsList)
          }
    if (userNumbers === true) {
      
      userSelections = userSelections.concat(numbersList)
            }
        for (var i =0; i < passwordLength; i++) { 
      generatedPassword = generatedPassword + userSelections[Math.floor(Math.random() * userSelections.length)]
} 
    return generatedPassword;

}



     // Get references to the #generate element
var generateBtn = document.querySelector("#generate");     
    
// console.log user selections loop password length into random characters for userselections 




  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

    