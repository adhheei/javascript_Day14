function removeAdjacentOdd(arr) {
    let result = [];
    let i = 0;

    while (i < arr.length) {
        if (arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0) {
            i += 2; // skip both odd numbers
        } else {
            result.push(arr[i]);
            i++;
        }
    }

    return result;
}

console.log("After Removing Adjacent Odds:", removeAdjacentOdd([1, 3, 4, 7, 9, 2, 5, 11]));
