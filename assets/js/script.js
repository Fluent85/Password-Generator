window.confirm ("Are you ready to generate a password?");
var length = 0;
while(length < 8 || length > 128){
    length = prompt("Please enter length of password", 8);
    length = parseInt(length, 10);
}
var specialCharacter = confirm("Special characters?");
var numericCharacter = confirm("Numeric character?");
var lowercaseCharacter = confirm("Lowercase character?");
var uppercaseCharacter = confirm("Uppercase character?");

var generate = "Generate Password";

var clipboard = "Copy to Clipboard";
var values = "";

//generate password
function makePassword(){
    if (specialCharacter){
        values += "/^[-_@.#&+-]*$";
    }
    if (numericCharacter){
        values += "0123456789";
    }
    if (lowercaseCharacter){
        values += "zxcvbnmlkjhgfdsaqwertyuiop";
    }
    if (uppercaseCharacter){
        values += "ZXCVBNMASDFGHJKLPOIUYTREWQ";
    }
    let password = "";

    //create for loop to select password characters
    for(var i= 0; i < length; i++){
        password = password + values.charAt(Math.floor(Math.random() * values.length - 1));
    }
    return password;
}

function myFunction() {
    document.getElementById("password").innerHTML = makePassword();
  }

//function to copy password to clipboard
function copyPassword() {
    var clipboard = document.getElementById("password");
    clipboard.select();

    var coppiedPassword = clipboard.textContent;
        console.log(clipboard);
        console.log(coppiedPassword);
    document.execCommand("copy");

    alert("Password is copied to clipboard!" + clipboard.value);
}