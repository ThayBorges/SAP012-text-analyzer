import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const userInput = document.getElementById("userInput");
const wordCount = document.getElementById("wordCount");
const caracterCount = document.getElementById("caracterCount");

const caracterNoSpaceCount = document.getElementById("caracterNoSpaceCount");
const numberCount = document.getElementById("numberCount");
const numberSum = document.getElementById("numberSum");
const wordLengthAverage = document.getElementById ("wordLengthAverage");


userInput.addEventListener ('keyup', function() {
    const text = userInput.value; 

    wordCount.textContent = analyzer.getWordCount(text);
    caracterCount.textContent = analyzer.getCharacterCount(text);
    caracterNoSpaceCount.textContent = analyzer.getCharacterCountExcludingSpaces(text);
    numberCount.textContent = analyzer.getNumberCount(text);
    numberSum.textContent = analyzer.getNumberSum(text);
    wordLengthAverage.textContent = analyzer.getAverageWordLength(text);




})
