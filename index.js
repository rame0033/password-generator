const firstEl = document.getElementById("firstPW-el")
const secondEl = document.getElementById("secondPW-el")
const passwordInput1 = document.querySelector("#firstPW-el")
const passwordInput2 = document.querySelector("#secondPW-el")
const slider = document.getElementById("pw-length")
const rangeValue = document.getElementById("pw-length-value")
const copyBtn1 = document.getElementById("copy1")
const copyBtn2 = document.getElementById("copy2")
const uppercaseCheckBox = document.getElementById("uppercaseBox")
const lowercaseCheckBox = document.getElementById("lowercaseBox")
const symbolCheckBox = document.getElementById("symBox")
const numberCheckBox = document.getElementById("numBox")
const promptParagraph = document.getElementById("prompt-par")
const generateBtn = document.getElementById("generate")

const uppercaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const lowercaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"]


// Initial password length
let passwordLength = 8

// Password length slider
function updateLength() {
    passwordLength = slider.value

    // Indicate the password length
    rangeValue.textContent = passwordLength
}

// Add event listener to slider
slider.addEventListener("input", updateLength)

function check() {
    return uppercaseCheckBox.checked || lowercaseCheckBox.checked || symbolCheckBox.checked || numberCheckBox.checked
}

// Return characters based on user selection
function retrieveChar() {
    let characters = []

    if (uppercaseCheckBox.checked) {
        characters = characters.concat(uppercaseChars)
    }
    if (lowercaseCheckBox.checked) {
        characters = characters.concat(lowercaseChars)
    }
    if (symbolCheckBox.checked) {
        characters = characters.concat(symbols)
    }
    if (numberCheckBox.checked) {
        characters = characters.concat(numbers)
    }

    return characters
}

// Generate a random character from the array
function charGen() {

    // Retrieve characters
    let characters = retrieveChar()

    let generatedChars = characters[Math.floor(Math.random() * characters.length)]

    return generatedChars
}

// Generate the number of characters in the password
function generatePassword() {
    let password = ""
    for (let i = 0; i < passwordLength; i++) {
        password += charGen()
    }

    return password
}

// Display generated passwords
generateBtn.addEventListener("click", function () { 

    // If no character type is selected
    if (!check()) {
        promptParagraph.textContent = "Please select at least one character type"
        passwordInput1.value = ""
        passwordInput2.value = ""
        return

        // Error prompt will be hidden if a character type is selected
    } else {
        promptParagraph.textContent = ""
    }

    // Display generated passwords to input fields
    passwordInput1.value = generatePassword()
    passwordInput2.value = generatePassword()
    console.log("Password generated")
}
)

// Copy button
function copyPW(elementId) {
    const copyText = document.getElementById(elementId);
    copyText.select()
    copyText.setSelectionRange(0, 99999); // For mobile devices

    navigator.clipboard.writeText(copyText.value)
        .then(() => {
            console.log(`Password copied to clipboard: ${elementId}`);
        })
        .catch(err => {
            console.error('Error detected: ', err);
        });
}

// Add event listeners to all buttons with the "copy-btn" class
document.querySelectorAll(".copy-btn").forEach(button => {
    button.addEventListener("click", () => {
        const inputId = button.dataset.inputId;
        const inputElement = document.getElementById(inputId);
        
         if (inputElement && inputElement.value) {
            navigator.clipboard.writeText(inputElement.value)
                .then(() => {
                    alert(`${inputId} copied to clipboard!`);
                    console.log(`Password copied to clipboard: ${inputId}`);
                })
                .catch(err => {
                    console.error('Error detected: ', err);
                    alert(`Failed to copy ${inputId}.`);
                });
        } else {
            alert(`No password to copy for ${inputId}.`);
            console.error('No password to copy or element not found.');
        }
    });
});