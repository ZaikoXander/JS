5 > 2;
7 < 4;
8 >= 8;
9 <= 7;
5 == 5;
4 != 4;

5 == 5; // true
5 == '5'; // true
5 === '5'; // false. tipos diferentes da false
5 === 5; // true

/*
    ! // negação
    !true == false
    !false == true

    && // conjunção == 'E' lógico
    true && true == true
    true && false == false
    false && true == false
    false && false == false

    || // disjunção == 'Ou' lógico
    true || true == true
    true || false == true
    false || true == true
    false || false == false

    Ordem:
    ! --> && --> ||
*/
/*
    Operador Ternário:

    teste(um teste lógico) ? true : false

    média >= 7.0 ? "Aprovado" : "Reprovado"
*/
/*
    Ordem de Precedência:

    Operadores Aritméticos -->  (), **, / ...
    Operadores Relacionais -->  > < >= ...
    Operadores Lógicos --> ! && ||
    Operador Ternário
*/