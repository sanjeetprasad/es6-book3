/*
    Purpose:
    This module contains a method that takes number trivia as a string and puts it on the DOM.
*/

const dom = {
  printToDom (trivia) {
    const containerRef = document.querySelector("#container");
    let triviaHtml = `<p>Number Trivia: ${trivia}</p>`;
    containerRef.innerHTML = triviaHtml;
  }
}

export default dom