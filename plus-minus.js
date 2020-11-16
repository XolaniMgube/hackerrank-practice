"use strict"
function plusMinus(arr) {
    let positive = [];
    let negative = [];
    let zero = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            negative.push(arr[i]);
        } else if (arr[i] > 0) {
            positive.push(arr[i]);
        } else {
            zero.push(arr[i]);
        }
    }
    
    positive = (positive.length / arr.length).toFixed(6);
    negative = (negative.length / arr.length).toFixed(6);
    zero = (zero.length / arr.length).toFixed(6);
    
    console.log(positive)
    console.log(negative)
    console.log(zero)
    // console.log(2/6)

}

plusMinus([-4, 3, -9, 0, 4, 1])
plusMinus([1, 2, 3, -1, -2, -3, 0, 0])