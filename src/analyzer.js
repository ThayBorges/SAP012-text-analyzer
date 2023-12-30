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
    // replace substitui o caracter de acordo com o regex informado(extrai somente numeros e pontos).
    const numberCount = text.replace(/\D/gim, '');
    //retorna a quantidade de numeros digitados
    return numberCount.length
    
  },

    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  
  getNumberSum: (text) => {
    const numberCount = text.replace(/\D/gim, '');

    const split = numberCount.split('');

    let resultado = 0;

    for (let i = 0; i < split.length; i++) {
      const valor = split[i];

      resultado = resultado + parseFloat(valor);
    }

    return resultado;
    
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
};

export default analyzer;
