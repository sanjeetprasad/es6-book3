/*
    Purpose:
    This module contains a method to make a fetch call to the Numbers API to get a random fact about a number.
*/

const data = {
  getNumberTrivia () {
      return fetch("http://numbersapi.com/random/trivia")
          .then(response => response.text())
  }
}

export default data