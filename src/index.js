module.exports = function toReadable (number) {
    let fromZeroToNineteen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fiveteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let fromTwentyToNinety = ['', '', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let hundred = 'hundred';
    let firstNum = Number(number.toString()[0]);
    let secondNum = Number(number.toString()[1]);
    let thirdNum = Number(number.toString()[2]);
    let fourthNum = Number(number.toString()[3]);
    let result;
        if (number >= 0 && number <= 19) {
            result = fromZeroToTwenty[number];
        } else if (number > 19 && number < 100) {
            result = `${fromTwentyToNinety[firstNum]} ${fromZeroToNinety[secondNum]}`;
        } else if (number >= 100 && number < 1000) {
            result = `${fromTwentyToNinety[firstNum]} ${hundred} ${fromTwentyToNinety[thirdNum]} ${fromTwentyToNinety[fourthNum]}`};
    return result
    };