module.exports = function toReadable (number) {
    let result = '';
    let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  

    if((number - number % 100) / 100 > 0) {
        result += numbers[(number - number % 100) / 100] + ' hundred';
    }
    if(number % 100 >= 20) {
        result += `${result.length > 0 ? ' ' : ''}${dozens[((number % 100) - (number % 10)) / 10]}`;

        if(number % 10) {
            result += ' ' + numbers[(number % 10)];
        }
    }
    else if(number % 100 > 0){
        result += `${result.length > 0 ? ' ' : ''}${numbers[(number % 100)]}`;
    }

    return result || 'zero';
}