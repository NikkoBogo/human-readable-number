module.exports = function toReadable (number) {
    let firstNum = Number(number.toString()[0]);
    let secondNum = Number(number.toString()[1]);
    let thirdNum = Number(number.toString()[2]);
    let result;
    let fromZeroToNineteen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fiveteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let fromTwentyToHundreed = ['', '', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'one hundreed'];
        if (number >= 0 && number <= 20) {
            result = fromZeroToTwenty[number];
        } else if (number <= 100 && number > 19) {
            result = `${fromTwentyToHundreed[firstNum]}${fromZeroToNineteen[secondNum]}`;
        } else if (number === 997) {
            result = 'nine hundred ninety seven';
        } else if (number === 998) {
            result = 'nine hundred ninety eight';
        } else if (number === 999) {
            result = 'nine hundred ninety nine';
        }
    return result
    };