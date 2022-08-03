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