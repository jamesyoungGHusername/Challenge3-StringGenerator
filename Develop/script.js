// Assignment Code
var generateBtn = document.querySelector("#generate");

// THIS FUNCTION IS NOT CRYPOGRAPHICALLY SECURE. USES A PSEUDORANDOM NUMBER GENERATOR.
function generatePassword(ofLength){
  const lowercase="abcdefghijklmnopqrstuvwxyz"
  const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const numeric="1234567890"
  const special="!@#$%^&*()_+-=.,"
  //TODO add logic to respond to user criteria for the password.
  const possibleChars="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-=., "
  let generatedPassword="";
  for (let i=0;i<ofLength;i++){
    generatedPassword+=possibleChars.charAt(getRandomInt(possibleChars.length));
  }
  return generatedPassword;
}

// This function is taken from the JS docs, returns a random integer including 0 below the provided max value (not inclusive)
function getRandomInt(max){
  return Math.floor(Math.random() * max);
}

// Write password to the #password input
function writePassword(length) {
  var password = generatePassword(length);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// For some reason adding prompt for input with a message
// causes the popup box to appear immidiately. 
// adding handleButtonPress as part of addEventListener 
// is a hacky workaround but fixes the problem.
function handleButtonPress(){
  promptForInput("Enter a number between 8 and 128");
}

//TO DO, dont use dialogue boxes, construct a popup form instead.
function promptForInput(message){
  var lenStr = prompt(message, "Enter a number");
  console.log(lenStr);
  if(lenStr===null || lenStr===""){
    pass
  }else{
    var lenInt=parseInt(lenStr);
    if (isNaN(lenInt)){
      promptForInput("That number wasn't recognized. Try again.")
    }else if(lenInt<8 || lenInt>128){
      promptForInput("That entry was outside specified bounds. Try again.\nGenerated password must contain between 8 and 128 characters.")
    }
    writePassword(lenInt);
  }
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", handleButtonPress);
