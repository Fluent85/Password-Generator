window.confirm ("Are you ready to generate a password?");

var generate = "Generate Password";
var copy = "Copy to Clipboard";

//generate password
function generate(){

}

//set password length and complexity
let complexity = document.getElementById("generate").values;

//possible values
const values = "/^[ A-Za-z0-9_@./#&+-]*$/";

let password = "";

//create for loop to select password characters
for(var i= 0; i <= complexity; i++){
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
}

//set default length of 8
document.getElementById("generate").innerHTML = "length 8";

//add password to textbox area
document.getElementById("password").value = password;

//function to copy password to clipboard
function copyPassword(){
    document.getElementById("copy").select();
    
    document.execCommand("copy");

    alert("Password is copied to clipboard!");
}