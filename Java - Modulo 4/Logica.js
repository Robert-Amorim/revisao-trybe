let fruits = [3, 4, 10, 1, 12];

let resultado = 0;

for (let index = 0; index < fruits.length; index +=1) {
  if(index < fruits.length){
    resultado = resultado + fruits[index]
  }
}
if (resultado >= 15){
  console.log(resultado);
}
else{
  console.log('Resultado é menos que 16')
}
