function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    let numbers = /(?=.*?[0-9])/
    let lowerCase = /(?=.*?[a-z])/
    let upperCase = /(?=.*?[A-Z])/
    let specialCharacters = /\W/
    let minLength = /.{6,}/

    let counter = 4;
    let passwordRequirements = [upperCase, lowerCase, specialCharacters, numbers];

    for (let i = 0; i < passwordRequirements.length; i++) {    
        if (passwordRequirements[i].test(password) == true) {
            counter--; 
        }
    }

    if (n < 6 && counter > 0) {
      let newLength = n + counter
      if (newLength >= 6) {
        counter = counter
      } else {
        counter = 6 - n
      }
    } else if (n < 6 && counter <= 0) {
      counter = 6 - n
    }
    return counter
}