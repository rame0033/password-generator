const firstEl = document.getElementById("firstPW-el")
const secondEl = document.getElementById("secondPW-el")
const passwordInput1 = document.querySelector("#firstPW-el")
const passwordInput2 = document.querySelector("#secondPW-el")
const slid3r = document.getElementById("pw-length")
const rangeValue = document.getElementById("pw-length-value")

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];



// Initial password length
let passwordLength = 8

// Password length slider
function updateLength(){
    passwordLength = slid3r.value
    const min = slid3r.min
    const max = slid3r.max
    rangeValue.textContent = passwordLength
}

// Generate random character
function charGen(){
    // Generate a random character from the array
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
    passwordInput1.value = generatePassword()
    passwordInput2.value = generatePassword()   
    console.log("Password generated") 
}

// Copy button
function copyPW(elementId){
    var pwInputElement = document.getElementById(elementId);
    pwInputElement.select()
    pwInputElement.setSelectionRange(0, 99999); // For mobile devices

    navigator.clipboard.writeText(pwInputElement.value)

    alert("Password copied to clipboard")
    console.log(`Password copied to clipboard: ${elementId}`)
}

copyPW('firstPW-el'); // For the first password element
copyPW('secondPW-el'); // For the second password element