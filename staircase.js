"use strict"

function staircase(n) {
    let hash = "#";
    let newHash = hash;
    let space = " "
    let spaceArray = []

    for (let x = n; x > 1; x--) {
        spaceArray.push(space)
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < 1; j++) {
            for (let k = n; k > (n - 1); k--) {
                console.log(spaceArray.join("") + newHash)
                spaceArray.pop()
            }
        }
        newHash += hash 
    }
}

staircase(6)