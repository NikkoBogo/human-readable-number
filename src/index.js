module.exports = function toReadable (number) {
    let fromZeroToNine = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let fromTenToNineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fiveteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let fromTwentyToNinety = ['', '', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
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
        } else if (number > 19 && number < 100) {
            result = `${fromTwentyToNinety[firstNum]} ${fromZeroToNineteen[secondNum]}`;
        } else if (number >= 100 && number <= 999 && thirdNum === 0) {
            result = `${fromZeroToNine[firstNum]} ${hundred} ${fromTwentyToNinety[thirdNum]}`;
        } else if (number >= 100 && number <= 999 && thirdNum !== 0) {
            result = `${fromZeroToNine[firstNum]} ${hundred} ${fromTwentyToNinety[thirdNum]} ${fromZeroToNine[thirdNum]}`;
        };
    return result
    };