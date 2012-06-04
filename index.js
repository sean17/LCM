module.exports = function(a, b) {
	var num1, num2;
    if (a > b) {
    	num1 = a;
    	num2 = b;
    } else {
        num1 = b;
        num2 = a;
    }
    for (var i = 1; i <= num2; i++) {
        if ((num1 * i) % num2 == 0) {
            return i * num1;
        }
    }
    console.log('I\'ve found an answer!');
}; 
