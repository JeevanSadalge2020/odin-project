const removeFromArray = function (arr, ...elements) {
    // console.log('args: ', typeof elements, Array.isArray(elements));
    // console.log('arr: ', typeof arr, Array.isArray(arr));

    for (let i = 0; i < elements.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (elements[i] === arr[j]) {
                arr.splice(j, 1);
                j--
            }
        }
    }
    return (arr);
};

(removeFromArray([1, 2, 3, 4, 5], 2, 5));

// Do not edit below this line
module.exports = removeFromArray;
