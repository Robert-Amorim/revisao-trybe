let queen_Attack_Column = 8;
let queen_Attack_Line = 1;

let opponent_Piece_Column = 0;
let opponent_Piece_Line = 6;

let effective_Attack = false;

if(queen_Attack_Column <= 0 || queen_Attack_Column > 8){
  console.log(`O valor da "queen_Attack_Column" é (${queen_Attack_Column}) 

Valor da coluna da Rainha não pode ser maior que 8 ou menor que 1`)
};
if(queen_Attack_Line <= 0 || queen_Attack_Line > 8){
  console.log(`O valor da "queen_Attack_Line" é (${queen_Attack_Line}) 

Valor da linha da Rainha não pode ser maior que 8 ou menor que 1`)
;}

if(opponent_Piece_Column <= 0 || opponent_Piece_Column > 8){
  console.log(`O valor da "opponent_Piece_Column" é (${opponent_Piece_Column}) 

Valor da coluna do Oponente não pode ser maior que 8 ou menor que 1`)
};

if(opponent_Piece_Line <= 0 || opponent_Piece_Line > 8){
  console.log(`O valor da "opponent_Piece_Line" é (${opponent_Piece_Line}) 

Valor da linha do Oponente não pode ser maior que 8 ou menor que 1`)
};

if (queen_Attack_Column === opponent_Piece_Column ||
  opponent_Piece_Column === queen_Attack_Column) {
  effective_Attack = true;
  console.log('Ataque efetivo na coluna');
};
//Diagonal inferior direita OK
for (let line_sub_dir = 1; line_sub_dir < 8; line_sub_dir += 1) {
  let line_Number_Queen = queen_Attack_Line + line_sub_dir;
  let column_Number_Queen = queen_Attack_Column - line_sub_dir;

  if (line_Number_Queen > 8 || column_Number_Queen < 1) {
    break;
  };

  if (line_Number_Queen === opponent_Piece_Line
    && column_Number_Queen === opponent_Piece_Column) {
    effective_Attack = true;
    console.log('Ataque efetivo! Da diagonal inferior direita para superior esquerda');
  };
};
//Diagonal inferior esquerdo OK
for (let line_inf_esq = 1; line_inf_esq < 8; line_inf_esq += 1) {
  let linhaRainha = queen_Attack_Line + line_inf_esq;
  let colunaRainha = queen_Attack_Column + line_inf_esq;

  if (linhaRainha > 8 || colunaRainha > 8) {
    break;
  };

  if (linhaRainha === opponent_Piece_Line && colunaRainha === opponent_Piece_Column) {
    effective_Attack = true;
    console.log('Ataque efetivo! Na diagonal inferior esquerdo para superior direita');
  };
};
//diagonal superior direita OK
for (let line_sup_esq = 1; line_sup_esq < 8; line_sup_esq += 1) {
  let rainhaLinha = queen_Attack_Line - line_sup_esq;
  let rainhaColuna = queen_Attack_Column - line_sup_esq;

  if (rainhaColuna < 1 || rainhaLinha < 1) {
    break;
  };

  if (rainhaLinha === opponent_Piece_Line
    && rainhaColuna === opponent_Piece_Column) {
    effective_Attack = true;
    console.log('Ataque efetivo! Na diagonal superior direita para inferior esquerda')
  };
};
//diagonal superior esquerda OK
for (let line_sup_esq = 1; line_sup_esq < 8; line_sup_esq += 1) {
  let rainhaLinha = queen_Attack_Line - line_sup_esq;
  let rainhaColuna = queen_Attack_Column + line_sup_esq;

  if (rainhaLinha < 1 || rainhaColuna > 8) {
    break;
  };

  if (rainhaLinha === opponent_Piece_Line
    && rainhaColuna === opponent_Piece_Column) {
    effective_Attack = true;
    console.log('Ataque efetivo! Na diagonal superior esquerda para inferior direita')
  }
};

if (effective_Attack === false){
  console.log('Não há ataque efetivo!')
};

