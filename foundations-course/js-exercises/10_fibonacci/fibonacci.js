const fibonacci = function (n) {
    if (typeof n === 'string') n = Number(n)
    if (n === 0 || n === 1) return n
    if (n < 0) return 'OOPS'
    else {
        let res = [1, 1];
        let sum = 0;
        for (let i = 1; i <= n; i++) {
            sum = res[i] + res[i - 1];
            res.push(sum)
        }
        return res[n - 1]
    }
};

console.log(fibonacci(6));

// Do not edit below this line
module.exports = fibonacci;
