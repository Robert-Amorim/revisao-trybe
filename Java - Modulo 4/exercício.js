// 3º Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:
let a = 100;
let b = 35;

console.log("Exercício 1º")
console.log(`Soma: ${a+b}`);
console.log(`Subtração: ${a-b}`);
console.log(`Multiplicacao: ${a*b}`);
console.log(`Divisão: ${a/b}`);
console.log(`Modulo: ${a%b}`);

// 2º Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

let c = 10;
let d = 15;

if (c > d) {
  console.log('c é maior que d');
}
else{
  console.log('d é maior que c');
};

// 3º Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

let x = 15;
let y = 10;
let z = 20;

if (x > y && x > z) {
  console.log('X é maior número');
}
else if (y > x && y > z) {
  console.log('Y é maior número');
}
else if (z > y && z > x) {
  console.log('Z é maior número');
}

// 4º Faça um programa que, dado um valor recebido como parâmetro, retorne "positive" se esse valor for positivo, "negative" se for negativo, e caso não seja nem positivo e nem negativo retorne "zero".

let num = 0;

if (num > 0){
  console.log("Positive");
}
else if (num < 0) {
  console.log("Negative");
}
else{
  console.log('Zero');
}

// 5º 🚀 que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

let areaA = 40;
let areaB = 40;
let areaC = 10;


let areaTotal = areaA + areaB + areaC;

if(areaTotal === 0){
  console.log('Error');
}
else if( areaA > 0 && areaB > 0 && areaC > 0){
  console.log(true);
}
else{
  console.log('false')
}

/* 6º Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
*Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
*Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
*Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
->Exemplo: bishop (bispo) -> diagonals (diagonais)
 */
const rei = 'Pode mover-se em qualquer direção, porém apenas uma casa por vez, como indicam os pontos vermelhos na figura abaixo.';
const dama = 'Assim como o Rei, pode mover-se em qualquer direção (vertical, horizontal e diagonal), porém quantas casas quiser, desde que estejam livres.';
const torre = 'Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.';
const bispo = 'Move-se na diagonal, quantas casas quiser. O Bispo que iniciar a partida em uma casa branca somente poderá transitar pelas brancas, enquanto o Bispo que inicia em uma casa preta somente poderá transitar pelas casas pretas.';
const cavalo = 'É a única peça que pode saltar sobre as outras peças do tabuleiro, sejam elas amigas ou inimigas. O movimento executado pelo Cavalo é conhecido por “um-dois” ou “em L”. Ele pode andar duas casas na horizontal e uma na vertical, ou duas na vertical e uma na horizontal, uma na horizontal e duas na vertical, e assim por diante. Quando a casa de saída do Cavalo for escura, a casa de chegada será clara, e vice-versa.';
const peao = 'Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas. O peão é a única peça que não pode retroceder, e também a única que efetua a captura com um movimento diferente do utilizado para avançar no tabuleiro. O peão pode capturar as peças que estejam uma fileira acima, mas nas colunas adjacentes a sua.';

let buscar = 'Rei';

if (buscar.toLowerCase() === 'rei') {
  console.log(`Movimentos do Rei: ${rei}`);
}
else if(buscar.toLowerCase() === 'dama') {
  console.log(`Movimentos da Dama: ${dama}`);
}
else if(buscar.toLowerCase() === 'torre') {
  console.log(`Movimento das Torres: ${torre}`);
}
else if(buscar.toLowerCase() === 'bispo') {
  console.log(`Movimento dos Bispos: ${bispo}`);
}
else if(buscar.toLowerCase() === 'cavalo') {
  console.log(`Movimento dos Cavalos: ${cavalo}`);
}
else if(buscar.toLowerCase() === 'peao') {
  console.log(`Movimentos dos Piões: ${cavalo}`);
}
else{
  console.log('Error! Pequisa não encontrada')
};

/* Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100. */

const nota = 80;
let resultado ='';

if(nota <0 || nota > 100) {
  resultado = 'Error! Essa nota não existe!'
}
else if(nota >= 90) {
  resultado = 'A';
}
else if (nota >= 80) {
  resultado = 'B';
}
else if (nota >= 70) {
  resultado = 'C';
}
else if (nota >= 60) {
  resultado = 'D';
}
else if (nota >= 50) {
  resultado = 'E';
}
else if (nota < 50) {
  resultado = 'F';
}
console.log(resultado);

/* 🚀 Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.
Bonus: use somente um if. */

const num1 = 7;
const num2 = 5;
const num3 = 9;

let resultado1 = false;

if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0){
  resultado1 = true;
}
console.log(resultado1);

/* Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.
Bonus: use somente um if. */

const num4 = 4;
const num5 = 6;
const num6 = 8;

let resultado2 = false;

if (num4 % 2 !== 0 || num5 % 2 !== 0 || num6 % 2 !== 0){
  resultado2 = true;
}
console.log(resultado2);

/* Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
Atente que, sobre o custo do produto, incide um imposto de 20%.
Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
valorCustoTotal = valorCusto + impostoSobreOCusto
lucro = valorVenda - valorCustoTotal (lucro de um produto)
 */

const custoDoProduto = 1000;
const custoDeVenda = 2000;

if(custoDoProduto >= 0 && custoDeVenda >= 0){
  const valorImposto = custoDoProduto * 1.2;
  const lucro = (valorImposto - custoDoProduto) * 1000;
  console.log(lucro); 
}
else{
  console.log('Error! Valor 0');
};

// Questão 11º

const salario = 3500;
let INSS;
let IR;

if (salario <= 1556.94) {
  INSS = salario * 0.08;
}
else if (salario <= 2594.92) {
  INSS = salario * 0.09;
}
else if (salario <= 5189.82) {
  INSS = salario * 0.11;
}
else{
  INSS = 570.88;
}

const salarioBase = salario - INSS;

if (salario <= 1903.98){
  IR = 0;
}
else if (salario <= 2826.65) {
  IR = (salario * 0.075) - 142.80;
}
else if (salario <= 3751.05) {
  IR = (salario * 0.15) - 354.80;
}
else if (salario <= 4664.68) {
  IR = (salario * 0.225) - 636.13
}
else{
  IR = (salario * 0.275) - 869.36;
};

console.log('Salário: ' + (salario - IR));