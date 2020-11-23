"use strict";

function kangaroo(x1, v1, x2, v2) {

  let kangaroo1 = []
  let kangaroo2 = []

  for (let i = x1; i < 20; i = i + v1) {
    kangaroo1.push(i)
  }

  for (let i = x2; i < 20; i = i + v2) {
    kangaroo2.push(i)
  }
  console.log(kangaroo1)
  console.log(kangaroo2)

  let length = 0
  if (kangaroo1.length >= kangaroo2.length) {
    length = kangaroo1.length
  } else {
    length = kangaroo2.length
  }

  let result = []
  for (let k = 0; k < length; k++) {
    if (kangaroo1[k] == kangaroo2[k]) {
      result.push("YES")
    }
      else {
        result.push("NO")
      }
  }


  console.log(result)



}

kangaroo(0, 3, 4, 2)
