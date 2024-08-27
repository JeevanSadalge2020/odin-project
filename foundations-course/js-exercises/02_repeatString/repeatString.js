const repeatString = function (str, num) {

    if (num < 0) return 'ERROR'
    if (num === 0) return ''

    let res = str;
    for (let i = 1; i < num; i++) {
        res += str;
    }
    return res;
};

// Do not edit below this line
module.exports = repeatString;
