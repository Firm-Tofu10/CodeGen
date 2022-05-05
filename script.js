const CharacterAmountRange = document.getElementById
('CharacterAmountRange')
const CharactersAmountNumber = document.getElementById
('CharactersAmountNumber')

CharactersAmountNumber.addEventListener('input', syncCharacterAmount)
CharacterAmountRange.addEventListener('input', syncCharacterAmount)

function    syncCharacterAmount(e) {
    const value = e.target.value
    CharactersAmountNumber.value = value
    CharacterAmountRange.value = value
}