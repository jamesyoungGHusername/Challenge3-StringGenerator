// Assignment Code
var generateBtn = document.querySelector("#generate");
var goBtn = document.querySelector("#go");
var incluLower = document.querySelector("#lowercase");
var incluUpper = document.querySelector("#uppercase");
var incluNumeric = document.querySelector("#numeric");
var incluSpecial = document.querySelector("#special");

var msgLen = 0;

//A more scalable way of doing this would be to have an array of character sets that the user can choose from,
//but it would be a lot of work for me to dynamically generate the checkboxes on the page
//based on the available character sets.
const lowercase="abcdefghijklmnopqrstuvwxyz";
const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numeric="1234567890";
const special="!@#$%^&*()_+-=.,";

// THIS FUNCTION IS NOT CRYPOGRAPHICALLY SECURE. USES A PSEUDORANDOM NUMBER GENERATOR.
function generatePassword(ofLength){
  const possibleChars=""
  if(incluLower){possibleChars.concat(lowercase);}
  if(incluUpper){possibleChars.concat(uppercase);}
  if(incluNumeric){possibleChars.concat(numeric);}
  if(incluSpecial){possibleChars.concat(special);}
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
  msgLen = promptForInput("Enter a number between 8 and 128.");
  document.getElementById("password").style.display="none";
  document.getElementById("prompt").style.display="flex";
  generateBtn.style.display="none";
}

//This function updates the variables that determine which character sets to include,
//then checks to make sure at least one is selected.
//if none are selected it highlights the prompt and asks for revised input
//if at least one is selected it stops displaying the message and generates the password.
function handleGoPress(){
  incluLower = document.querySelector("#lowercase");
  incluUpper = document.querySelector("#uppercase");
  incluNumeric = document.querySelector("#numeric");
  incluSpecial = document.querySelector("#special");
  if (incluLower || incluUpper || incluNumeric || incluSpecial){
    document.getElementById("prompt").style.display="none";
    document.getElementById("password").style.display="block";
    generateBtn.style.display="inline-block";
    while (msgLen==0){
      msgLen = promptForInput("Pasword length must be specified.");
    }
    writePassword();
  }else{
    document.getElementById("prompt").style.backgroundColor = "red";
    document.getElementById("promptMessage").innerHTML = "You must select at least one type of character.";
  }
  
}

//A recursive function that prompts the user for the intended length of their message
//attempts to validate it, and asks again with a different message if the input isnt valid.
function promptForInput(message){
  var lenStr = prompt(message, "Enter a number");
  console.log(lenStr);
  if(lenStr===null || lenStr===""){
    pass
  }else{
    msgLen=parseInt(lenStr);
    if (isNaN(lenInt)){
      promptForInput("That number wasn't recognized. Try again.")
    }else if(lenInt<8 || lenInt>128){
      promptForInput("That entry was outside specified bounds. Try again.\nGenerated password must contain between 8 and 128 characters.")
    }
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", handleButtonPress);
//Add event listener to "GO" button.
goBtn.addEventListener("click", handleGoPress)
