/* Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:

Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b)
 */

let A = 10;
let B = 20;

const Adicao = A + B;
const Subtracao = A + B;
const Multiplicacao = A * B;
const Divisao = A / B;
const Modulo = A % B;

console.log(
`Adição: ${Adicao}
Subtração: ${Subtracao}
Multiplicação: ${Multiplicacao}
Divisão: ${Divisao}
Módulo: ${Modulo}`
);

// Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

let A = 20;
let B = 15;

if(A > B){
  console.log('A é maior que B');
}
else{
  console.log('B é maior que A');
}

// Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

let A = 40;
let B = 58;
let C = 69;

if( A > B && A > C){
  console.log('A é maior que B e C');
}
else if(B > A && B > C){
  console.log('B é maior que A e C');
}
else{
  console.log('C é maior que A e B');
}

//Faça um programa que, dado um valor recebido como parâmetro, retorne "positive" se esse valor for positivo, "negative" se for negativo, e caso não seja nem positivo e nem negativo retorne "zero".

let A = 15;

if( A % 2 === 0 ){
  console.log('Esse número é positivo!');
}else{
  console.log('Esse número é negativo!');
}

//🚀 Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

let A = -1;
let B = 70;
let C = 60;


if(A + B + C === 180){
  console.log(true);
}
else if(A || B || C < 0){
  console.log('Angúlo invalido!');
}else{
  console.log(false);
}

//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

//Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

//Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

//Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

//Exemplo: bishop (bispo) -> diagonals (diagonais)

let rei = 'Pode mover-se em qualquer direção, porém apenas uma casa por vez, como indicam os pontos vermelhos na figura abaixo.';

let dama = 'Assim como o Rei, pode mover-se em qualquer direção (vertical, horizontal e diagonal), porém quantas casas quiser, desde que estejam livres.';

let torre = 'Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.';

let bispo = 'Move-se na diagonal, quantas casas quiser. O Bispo que iniciar a partida em uma casa branca somente poderá transitar pelas brancas, enquanto o Bispo que inicia em uma casa preta somente poderá transitar pelas casas pretas.';

let cavalo = 'É a única peça que pode saltar sobre as outras peças do tabuleiro, sejam elas amigas ou inimigas. O movimento executado pelo Cavalo é conhecido por “um-dois” ou “em L”. Ele pode andar duas casas na horizontal e uma na vertical, ou duas na vertical e uma na horizontal, uma na horizontal e duas na vertical, e assim por diante. Quando a casa de saída do Cavalo for escura, a casa de chegada será clara, e vice-versa.';

let peao = 'Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas. O peão é a única peça que não pode retroceder, e também a única que efetua a captura com um movimento diferente do utilizado para avançar no tabuleiro. O peão pode capturar as peças que estejam uma fileira acima, mas nas colunas adjacentes a sua.';

let peçaDeXadrez = 'Rei';

switch(toLowerCase(peçaDeXadrez)){
  case 'rei':
    console.log(`Rei: ${rei}`);

    break;

    case 'dama':
      console.log(`Dama: ${dama}`);

      break;

      case 'torre':
        console.log(`Torre: ${torre}`);

        break;

        case 'bispo':
          console.log(`Bispo: ${bispo}`);

          break;

          case 'cavalo':
            console.log(`Cavalo: ${cavalo}`);

            break;

            case 'peão':
              console.log(`Peão: ${peao} `);

              break;

              default:
                console.log('Peça inválida!');
}

/* Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. 
Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F

O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100. */

let nota = -1;

if (nota > 100 || nota < 0){
  console.log('Error!')
}
else if (nota >= 90 && nota < 100) {
  console.log('Nota A');
}
else if (nota >= 80) {
  console.log('Nota B');
}
else if (nota >= 70) {
  console.log('Nota C');
}
else if (nota >= 60) {
  console.log('Nota C');
}
else if (nota >= 50) {
  console.log('Nota E');
}
else{
  console.log('Nota F');
}

/* 🚀 Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.

Bonus: use somente um if. */

let A = 53;
let B = 40;
let C = 81;

if (A % 2 === 0 || B % 2 === 0 || C % 2 === 0){
  console.log(`Numero par ${true}`);
}else{
  console.log(`Numero ímpar ${false}`);
}

/* Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.

Bonus: use somente um if. */

let A = 53;
let B = 40;
let C = 81;

if (A % 2 !== 0 || B % 2 !== 0 || C % 2 !== 0){
  console.log(`Numero ímpar ${true}`);
}else{
  console.log(`Numero par ${false}`);
}

/* Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
Atente que, sobre o custo do produto, incide um imposto de 20%.
Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
valorCustoTotal = valorCusto + impostoSobreOCusto
lucro = valorVenda - valorCustoTotal (lucro de um produto) */

let custoDeUmProduto = 2500;
let valorDeVenda = 3500;

if (custoDeUmProduto >= 0 && valorDeVenda >= 0){
  const valorBruto = custoDeUmProduto * 1.2;
  const quantidadeDevenda = (valorDeVenda - valorBruto) * 1000; 
  console.log(quantidadeDevenda);
}else{
  console.log('Error! Valor inserido é invalido.')
}

/* Uma pessoa de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido por ela.
A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:

INSS (Instituto Nacional do Seguro Social)
Salário bruto até R$ 1.556,94: alíquota de 8%
Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

IR (Imposto de Renda)
Até R$ 1.903,98: isento de imposto de renda
De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto. */


let inss;
let ir;

let salario = 1200.00;

if (salario <= 1556.94){
  inss = salario * 0.08;
} else if(salario <= 2594.92){
  inss = salario * 0.09;
} else if(salario <= 5189.82){
  inss = salario * 0.11;
} else {
  inss = 570.88;
}

const salarioBase = salario - inss;

if (salarioBase <= 1903.98) {
  ir = 0;
} else if (salarioBase <= 2826.65 ){
  ir = (salarioBase * 0.075) - 142.80; 
} else if (salarioBase <= 3751.05){
  ir = (salarioBase * 0.15) - 354.80;
} else if (salarioBase <= 4664.68){
  ir = (salarioBase * 0.225) - 636.13;
} else {
  ir = (salarioBase * 0.275) - 869.36;
};

console.log('Salário liquido:' + (salarioBase - ir));
