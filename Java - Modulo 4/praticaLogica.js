
let fatorial = 1;

for(let index = 10; index > fatorial; index -= 1 ){
  fatorial *= index;
};
console.log(fatorial);


let string = 'Trybe'
let desconstruir = string.split('').reverse().join('');
console.log(desconstruir);


let array = ['javascript', 'java', 'python', 'html', 'css'];
let big = array[0];
let small = array [0];

for(let index = 0; index < array.length; index +=1){
  if(array[index].length > big.length){
    big = array[index];
  }
}

for(let index = 0; index < array.length; index +=1){
  if(array[index].length < small.length){
    small = array[index];
  }
}
console.log(`Menor String ${small}`);
console.log(`Maior String ${big}`);