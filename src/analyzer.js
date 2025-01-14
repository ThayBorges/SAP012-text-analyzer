const analyzer = {  
  getWordCount: (text) => {
    const words = text.trim().split(" ").filter(word => word !== ''); //split permite dividir uma string em partes menores com base em um separador especificado 
    return words.length;
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCount: (text) => {
    return text.length;
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCountExcludingSpaces: (text) => {
    
    const spacesRemoved = text.replace(/[\s,.:;!?><]/g, ""); //O replace()método de Stringvalores retorna uma nova string com uma, algumas ou todas as correspondências de a patternsubstituídas por a replacement
    return spacesRemoved.length; 
    
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (text) => {    
    const words = text.trim().split(" ").filter(word => word !== '');
    if (words.length === 0) return 0;

    const totalCharacters = words.join('').length; //join junta todos os elelentos de um array
    return parseFloat((totalCharacters / words.length).toFixed(2));
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    // replace substitui o caracter de acordo com o regex informado(extrai somente numeros e pontos).
    const numberCount = text.match(/\b\d+(?:\.\d+)?\b/g);
    if(numberCount){
      //retorna a quantidade de numeros digitados
      return numberCount.length;
    }
    return 0;
  },

  //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  
  getNumberSum: (text) => {
    //const numberCount = text.replace(/\D/gim, '');

    //const split = numberCount.split('');
    const numberSum = text.match(/\b\d+(?:\.\d+)?\b/g);
    if(numberSum){
      //retorna a quantidade de numeros digitados
      let resultado = 0;

      for (let i = 0; i < numberSum.length; i++) {
        const valor = numberSum[i];

        resultado = resultado + parseFloat(valor);
      }

      return resultado;
    }
    return 0;
    
    
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
};

export default analyzer;
