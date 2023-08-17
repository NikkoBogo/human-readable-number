module.exports = function toReadable (number) {
    let fromZeroToNine = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let fromTenToNineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fiveteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let fromTwentyToNinety = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let hundred = 'hundred';
    let firstNum = Number(number.toString()[0]);
    let secondNum = Number(number.toString()[1]);
    let thirdNum = Number(number.toString()[2]);
    let fourthNum = Number(number.toString()[3]);
    let result;
        if (number >= 0 && number <= 9) {
            result = fromZeroToNine[number];
        } else if (number >= 10 && number <= 19) {
            result = fromTenToNineteen[secondNum];
        } else if (number > 19 && number < 100 && secondNum !== 0) {
            result = `${fromTwentyToNinety[firstNum]} ${fromZeroToNine[secondNum]}`;
        } else if (number > 19 && number < 100 && secondNum === 0) {
            result = fromTwentyToNinety[firstNum];
        } else if (number >= 120 && number <= 999 && secondNum === 0 && thirdNum === 0) {
            result = `${fromZeroToNine[firstNum]} ${hundred} ${fromTwentyToNinety[thirdNum]}`;
        } else if (number >= 120 && number <= 999 && secondNum === 0 && thirdNum !== 0) {
            result = `${fromZeroToNine[firstNum]} ${hundred} ${fromZeroToNine[thirdNum]}`;
        } else if (number >= 120 && number <= 999 && secondNum !== 0 && thirdNum === 0) {
            result = `${fromZeroToNine[firstNum]} ${hundred} ${fromTwentyToNinety[secondNum]}`;
        } else if (number >= 120 && number <= 999 && secondNum !== 0 && thirdNum !== 0) {
            result = `${fromZeroToNine[firstNum]} ${hundred} ${fromTwentyToNinety[secondNum]} ${fromZeroToNine[thirdNum]}`;
        } else if (number > 100 && number <= 119 && secondNum !== 0) {
            result = `${fromZeroToNine[firstNum]} ${hundred} ${fromTenToNineteen[thirdNum]}`;
        }
    return result
    };