const firstEl = document.getElementById("firstPW-el")
const secondEl = document.getElementById("secondPW-el")
const passwordInput1 = document.querySelector("#firstPW-el")
const passwordInput2 = document.querySelector("#secondPW-el")
const slid3r = document.getElementById("pw-length")
const rangeValue = document.getElementById("pw-length-value")
let upperBox = document.getElementById("uppercaseBox")
let lowerBox = document.getElementById("lowercaseBox")
let symbolBox = document.getElementById("symBox")
let numB0x = document.getElementById("numBox")
const promptPar = document.getElementById("prompt-par")

const upperCASE = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const lowerCASE = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const numer1c = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symb0ls = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]


// Initial password length
let passwordLength = 8

// Password length slider
function updateLength(){
    passwordLength = slid3r.value
    const min = slid3r.min
    const max = slid3r.max
    // Indicate the password length
    rangeValue.textContent = passwordLength
}

function check(){
    return upperBox.checked || lowerBox.checked || symbolBox.checked || numB0x.checked
}

// Return characters based on user selection
function retrieveChar() {
    let characters = []

    if (upperBox.checked) {
        characters = characters.concat(upperCASE)
    } if (lowerBox.checked) {
        characters = characters.concat(lowerCASE)
    } if (symbolBox.checked) {
        characters = characters.concat(symb0ls)
    } if (numB0x.checked) {
        characters = characters.concat(numer1c)
    }

    return characters
}

// Generate a random character from the array
function charGen(){

    // Retrieve characters
    let characters = retrieveChar()

    let gen3r4ted = characters [Math.floor(Math.random() * characters.length)]

    return gen3r4ted
}

// Generate the number of characters in the password
function generatePassword(){
    let password = ""
    for (let i = 0; i < passwordLength; i++){
        password += charGen()
    }

    return password
}

// Display generated passwords
function gener4t3(){

    // If no character type is selected
    if (!check()){
        promptPar.textContent = "Please select at least one character type"
        passwordInput1.value = ""
        passwordInput2.value = ""
        return

    // Error prompt will be hidden if a character type is selected
    } else {
        promptPar.textContent = ""
    }

    // Display generated passwords to input fields
    passwordInput1.value = generatePassword()
    passwordInput2.value = generatePassword()   
    console.log("Password generated") 
}

// Copy button
function copyPW(elementId){
    let pwInputElement = document.getElementById(elementId);
    pwInputElement.select()
    pwInputElement.setSelectionRange(0, 99999); // For mobile devices

   navigator.clipboard.writeText(pwInputElement.value)
        .then(() => {
            alert("Password copied to clipboard");
            console.log(`Password copied to clipboard: ${elementId}`);
        })
        .catch(err => {
            console.error('Failed to copy password: ', err);
        });
}

// Copy first password value on click
document.getElementById("copy1").addEventListener("click", copyPW);

// Copy second password value on click
document.getElementById("copy2").addEventListener("click", copyPW);