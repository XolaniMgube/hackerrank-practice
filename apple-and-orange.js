"use strict";

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let appleArray = apples
    .map(apple => a + apple)
    .filter(fallenApple => fallenApple >= s && fallenApple <= t)

  let orangeArray = oranges
    .map(orange => b + orange)
    .filter(fallenOrange => fallenOrange <= t && fallenOrange >= s)

    console.log(appleArray.length)
    console.log(orangeArray.length)
  
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
countApplesAndOranges(2, 3, 1, 5, [-2], [-1]);
