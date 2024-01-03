import analyzer from "./analyzer.js";

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const userInput = document.querySelector('textarea[name="user-input"]');

const wordCount = document.querySelector("li.item:nth-of-type(1)");
const characterCount = document.querySelector("li.item:nth-of-type(2)");
const characterNoSpaceCount = document.querySelector("li.item:nth-of-type(3)");
const numberCount = document.querySelector("li.item:nth-of-type(4)");
const numberSum = document.querySelector("li.item:nth-of-type(5)");
const wordLengthAverage = document.querySelector("li.item:nth-of-type(6)");

const btnCopy = document.querySelector("#btn-copy");
const btnClear = document.getElementById("reset-button");

userInput.addEventListener("input", function () {
  const text = userInput.value;

  wordCount.textContent = `Contagem de palavras: ${analyzer.getWordCount(
    text
  )}`;
  characterCount.textContent = `Contagem de caracteres: ${analyzer.getCharacterCount(
    text
  )}`;
  characterNoSpaceCount.textContent = `Contagem de caracteres (sem espaços): ${analyzer.getCharacterCountExcludingSpaces(
    text
  )}`;
  numberCount.textContent = `Contagem de números: ${analyzer.getNumberCount(
    text
  )}`;
  numberSum.textContent = `Soma dos números: ${analyzer.getNumberSum(text)}`;
  wordLengthAverage.textContent = `Comprimento médio das palavras: ${analyzer
    .getAverageWordLength(text)
    .toFixed(2)}`;
});

btnCopy.addEventListener("click", async function () {
  try {
    const textToCopy = userInput.value;

    await navigator.clipboard.writeText(textToCopy);
    alert("Texto copiado para a área de transferência!");
  } catch (err) {
    console.error("Erro ao copiar o texto:", err);
    alert("Falha ao copiar o texto.");
  }
});

btnClear.addEventListener("click", function () {
  userInput.value = "";
});