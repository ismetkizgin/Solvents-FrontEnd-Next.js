function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

module.exports.randomNumber = () => {
    for (let i = 1; i <= 5; i++) {
        $('#NumberInput' + i).val(getRndInteger(1, 10));
    }
    $('#NumberInput6').val((getRndInteger(1, 10) * 10).toString());
    $('#TargetNumberInput').val(getRndInteger(100, 1000));

}

module.exports.randomLetter = () => {
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZİŞÖÜĞ';
    for (let i = 1; i <= 8; i++) {
        $('#LetterInput' + i).val(letters[getRndInteger(1, letters.length)]);
    }
}