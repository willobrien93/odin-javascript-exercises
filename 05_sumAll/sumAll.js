const sumAll = function(a, b) {
    // Input Validation
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] < 0 || typeof(arguments[i]) != 'number') {
            return 'ERROR'
        }

    }
    // Sum Calculation
    sum = 0;
    if (a <= b) {
        for (let i = a; i <= b; i++) {
            sum += i;
        }
    } else {
        for (let i = b; i <= a; i++) {
            sum += i;
        }
    }
    return sum;
}

// Do not edit below this line
module.exports = sumAll;
