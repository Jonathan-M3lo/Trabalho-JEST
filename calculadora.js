function soma(a, b) {
    return a + b;
  }
  
  function subtracao(a, b) {
    return a - b;
  }
  
  function multiplicacao(a, b) {
    return a * b;
  }
  
  function divisao(a, b) {
    if (b === 0) {
      throw new Error("Divisão por zero não é permitida");
    }
    return a / b;
  }
  
  module.exports = { soma, subtracao, multiplicacao, divisao };
  function ePalindromo(str) {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
  }
  
  module.exports = { soma, subtracao, multiplicacao, divisao, ePalindromo };
  