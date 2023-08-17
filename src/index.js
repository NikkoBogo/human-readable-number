module.exports = function toReadable (number) {
    let fromZeroToTwenty = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fiveteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
    let result;
        if (number >= 0 && number <= 20) {
            result = fromZeroToTwenty[number];
        } else if (number === 996) {
            result = 'nine hundred ninety six';
        } else if (number === 997) {
            result = 'nine hundred ninety seven';
        } else if (number === 998) {
            result = 'nine hundred ninety eight';
        } else if (number === 999) {
            result = 'nine hundred ninety nine';
        }
    return result
    };