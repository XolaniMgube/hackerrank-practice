"use strict"

function diagonalDifference(arr) {
    // Write your code here
    let diagonalA = 0
    let diagonalB = 0
    let difference = 0
    for (let i = 0; i < arr.length; i++) {
        diagonalA += arr[i][i]
        diagonalB += arr[i][(arr.length - 1) - i]
    }

    difference = diagonalA - diagonalB
    if (difference < 0) {
        difference = difference.toString().replace(/\-/g, "")
    }

    return difference

}

console.log(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]))