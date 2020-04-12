function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

module.exports.randomNumber = () => {
    for (let i = 1; i <= 5; i++) {
        document.getElementById('NumberInput' + i).value = getRndInteger(1, 10)
    }
    document.getElementById('NumberInput6').value = (getRndInteger(1, 10) * 10);
    document.getElementById('TargetNumberInput').value = getRndInteger(100, 1000)

}

module.exports.randomLetter = () => {
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZİŞÖÜĞ';
    for (let i = 1; i <= 8; i++) {
        document.getElementById('LetterInput' + i).value = letters[getRndInteger(1, letters.length)]
    }
}