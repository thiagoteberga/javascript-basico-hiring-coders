/*

FizzBuzz
Divisivel por 3 => 'Fizz'
Divisivel por 5 => 'Buzz'
Divisivel por 3 e por 5 => 'FizzBuzz'
Se nao for um numero => 'Não é um número'
Se nao for divisivel nem por 3 e nem por 5 => Entrada

*/

let resultado = fizzBuzz(15);
console.log(resultado);

function fizzBuzz(entrada){
    if (typeof entrada !== 'number'){
        return 'Não é um número!';
    } else if (entrada % 3 === 0 && entrada % 5 === 0) { /*Usando 3 iguais para verificar o valor e o tipo*/
        return 'FizzBuzz';
    } else if (entrada % 3 === 0 ) { /*Usando 3 iguais para verificar o valor e o tipo*/
        return 'Fizz';
    } else if (entrada % 5 === 0 ) { /*Usando 3 iguais para verificar o valor e o tipo*/
        return 'Buzz';
    }

    return entrada;
}