"use strict";

function gradingStudents(grades) {

  let rounded = grades.map((singleGrade) => {
    for (let i = 0; i < 5; i++) {
      if (singleGrade % 5 != 0) {
        singleGrade++;
      }
    }
    return singleGrade;
  });

  let difference
  let finalScore = []

  for (let i = 0; i < rounded.length; i++) {
    difference = rounded[i] - grades[i]
    if (grades[i] < 38) {
      finalScore.push(grades[i])
    } else if (difference < 3) {
      finalScore.push(rounded[i])
    } else if (difference >= 3) {
      finalScore.push(grades[i])
    }
  }

  return finalScore
}

console.log(gradingStudents([73, 67, 38, 33]));
