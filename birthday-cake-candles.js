"use strict";

function birthdayCakeCandles(candles) {
  // Write your code here
  candles = candles.sort();
  let repeated = 0;

  for (let i = 0; i < candles.length; i++) {
    if (candles[i] == candles[i + 1]) {
      repeated = candles[i];
    }
  }
  let counter = candles.filter((number) => number == repeated);
  console.log(counter.length);
}

birthdayCakeCandles([3, 2, 1, 3]);
