"use strict"

function timeConversion(s) {
  let format = s.match(/[A-Z]/g) //matching PM and AM
  let hours = s.match(/\d{2}(?=\:)/) // matching the hours (numbers before first colon)

  if (format.join("") == "PM") {
    if (hours == "12") {
      return s.match(/[0-9]{2}/g).join(":") //hours, minutes, second and separating them by semicolon
    } else {
      s = s.replace(hours, parseInt(hours) + 12) //converting from str to int then add 12 in hours
      return s.match(/[0-9]{2}/g).join(":")
    }
    
  } else if (format.join("") == "AM") {
    if (hours == "12") {
      s = s.replace(hours, "00")
    } 
    return s.match(/\d{2}/g).join(":")
  }
}

timeConversion("07:05:45PM")
timeConversion("07:05:45AM")
console.log(timeConversion("12:45:54PM"))