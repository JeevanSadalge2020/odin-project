const sumAll = function (a, b) {
    console.log(a, b);
    if (typeof b !== 'number') return 'ERROR'
    if (parseInt(a) !== a || parseInt(b) !== b) return 'ERROR'
    if (a < 0 || b < 0) return 'ERROR'

    let sum = 0;
    let start;
    let end;
    if (a < b) {
        start = a;
        end = b;
    } else {
        start = b;
        end = a;
    }
    for (let i = start; i <= end; i++) {
        sum = sum + i;
    }
    return sum
};

console.log(sumAll(1, 2.0));

// Do not edit below this line
module.exports = sumAll;
