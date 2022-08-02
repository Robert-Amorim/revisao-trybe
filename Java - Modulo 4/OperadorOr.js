let weekDay = 'terça-feira';

let resposta = '';

if (weekDay === 'segunda-feira' || weekDay === 'terça-feira' || weekDay === 'quarta-feira' || weekDay === 'sexta-feira') {
  resposta = "Oba, mais um dia de aprendizado na Trybe >:D"
}
else if (weekDay === 'sabádo' || weekDay === 'domingo'){
  resposta = "FINALMENTE, descanso merecido UwU"
};

console.log(resposta);