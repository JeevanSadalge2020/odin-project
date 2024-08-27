const palindromes = function (str) {
    let rev = str.split('').reverse().join().replace(/[^a-zA-Z0-9 ]/g, "").replaceAll(' ', '').toLowerCase();
    str = str.replace(/[^a-zA-Z0-9 ]/g, "").replaceAll(' ', '').toLowerCase()
    return rev === str ? true : false
};

console.log(palindromes('A car, a man, a maraca'));
console.log(palindromes('r3ace3car'));

// Do not edit below this line
module.exports = palindromes;
