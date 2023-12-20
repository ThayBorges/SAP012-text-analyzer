const analyzer = {  
  getWordCount: (text) => {
    const words = text.trim().split(/\s+/).filter(word => word !== '');
    return words.length;
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCount: (text) => {
    return text.length;
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCountExcludingSpaces: (text) => {
    
    const spacesRemoved = text.replace(/\s/g, "");
    return spacesRemoved.length; 
    
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (text) => {    
    const words = text.trim().split(/\s+/).filter(word => word !== '');
    if (words.length === 0) return 0;

    const totalCharacters = words.join('').length;
    return totalCharacters / words.length;
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    // Converte a string para um array de caracteres
  const caracteres = text.split("");

    // Inicializa o contador
  let numeros = 0;

  // Percorre o array de caracteres
  for (const caractere of caracteres) {
    // Verifica se o caractere é um número
    if (/\d/.test(caractere) && caractere !== "0") {
      // Incrementa o contador
      numeros++;
    }
  }

  // Retorna o número de números
  return numeros; 
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
};

export default analyzer;
