const { soma, subtracao, multiplicacao, divisao, ePalindromo } = require('./calculadora');

// Testes para a função calculadora
test('soma 1 + 2 para igualar 3', () => {
  expect(soma(1, 2)).toBe(3);
});

test('subtrai 5 - 3 para igualar 2', () => {
  expect(subtracao(5, 3)).toBe(2);
});

test('multiplica 2 * 3 para igualar 6', () => {
  expect(multiplicacao(2, 3)).toBe(6);
});

test('divide 6 / 2 para igualar 3', () => {
  expect(divisao(6, 2)).toBe(3);
});

test('lança erro ao dividir por zero', () => {
  expect(() => divisao(1, 0)).toThrow("Divisão por zero não é permitida");
});

// Testes para a função ePalindromo
test('verifica se "arara" é um palíndromo', () => {
  expect(ePalindromo('arara')).toBe(true);
});

test('verifica se "casa" não é um palíndromo', () => {
  expect(ePalindromo('casa')).toBe(false);
});

test('verifica se uma string vazia é um palíndromo', () => {
  expect(ePalindromo('')).toBe(true);
});

test('verifica se "A man, a plan, a canal. Panama" é um palíndromo', () => {
  expect(ePalindromo('A man, a plan, a canal. Panama')).toBe(true);
});
