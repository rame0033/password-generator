let firstEl = document.getElementById("1stPW-el")
let secondEl = document.getElementById("2ndPW-el")

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 15

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
    firstEl.textContent = generatePassword()
    secondEl.textContent = generatePassword()    
}
