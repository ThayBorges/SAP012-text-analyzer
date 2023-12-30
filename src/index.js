import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const userInput = document.querySelector('textarea[name="user-input"]');
const listItems = document.querySelectorAll('.item')
const wordCount = document.querySelector('.item[class*="Contagem de Números:"]');
const btnCopy = document.querySelector("#btn-copy")
const btnClear = document.getElementById("#btn-clear")


userInput.addEventListener ('input', function() {
    const text = userInput.value; 

    wordCount.textContent = `Contagem de palavras: ${analyzer.getWordCount(text)}`;
})

btnCopy.addEventListener ('click', async function() {
    try {
        const textToCopy = userInput.value;
    
        await navigator.clipboard.writeText(textToCopy);
        alert('Texto copiado para a área de transferência!');
      } catch (err) {
        console.error('Erro ao copiar o texto:', err);
        alert('Falha ao copiar o texto.');
      }

})

btnClear.addEventListener ('click', function() {
    userInput.value = '';
})

