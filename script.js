var CharacterRange = document.getElementById
("CharacterRange")
var CharacterNumber = document.getElementById 
("CharacterNumber")
const NumberOfCharacters = document.createElement
("NumberOfCharacters")
const GeneratorWithUpercase = document.createElement
("GeneratorWithUpercase")
const GeneratorWithNumbers = document.createElement
("GeneratorWithNumbers")
const GeneratorWithSymbols = document.createElement
("GeneratorWithSymbols")
const form = document.getElementById('passwordGeneratorForm')
const passwordDisplay = document.getElementById('passwordDisplay')

const UPPERCASE_CHAR_CODES = arrayFormLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFormLowToHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFormLowToHigh(48, 57)
const SYMBOLE_CHAR_CODES = arrayFormLowToHigh(33, 47).concat(
    arrayFormLowToHigh(58, 64)
).concat(
    arrayFormLowToHigh(91, 96)
).concat(
    arrayFormLowToHigh(123, 126)
)



form.addEventListener('submit', e => {
    e.preventDefault()
    const NumberOfCharacters = CharacterNumber.value
    const GeneratorWithUpercase = GeneratorWithUpercaseElement.checked
    const GeneratorWithNumbers = GeneratorWithNumbersElement.checked
    const GeneratorWithSymbols = GeneratorWithSymbolsElement.checked
    const Password = GeneratorPassword(NumberOfCharacters,GeneratorWithUpercase,
        GeneratorWithNumbers,GeneratorWithSymbols)
        passwordDisplay.innerText = Password
})

function GeneratorPassword(NumberOfCharacters,GeneratorWithUpercase,GenerateWithNumbers,GenerateWithSymbols){
    let charCodes = LowercaseCharCodes
    if (GeneratorWithUpercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
    if (GeneratorWithSymbols) charCodes = charCodes.concat(SYMBOLE_CHAR_CODES)
    if (GenerateWithNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
   
    for(let i - 0; i < NumberOfCharacters, i++) {
        const characterCode = charCodes[Math.floor(Math.random() * NumberOfCharacters)]
        passwordCharacters.push(String.formCharCode(characterCode))
    }
    return passwordCharacters.join('')
}

function arrayFormLowToHigh(low, high) {
    const array = []
    for (let i = low; i <= high; i++) {
    array.push(i)
    }
    return array
}





function syncNumberOfCharacters(e) {
    const NumberOfCharacters = value = e.target.value
    NumberOfCharacters.value = value
    GenerateWithNumbers.value = value
}