console.log("Hello world!");

{
    var age = 27;
}

{
    let idade = 25;
    console.log(idade);
}

var myName, yourName; //Eh global
let language = "Javascript"; //Nao eh global
const pattern = "ECMASript"; //Precisa inicializar


var isName = "Thiago"; //String
var myAge = 27; //Number
var heigth = 1.75; //Float
var isStudent = false; //Boolean
null;
undefined;
//Objeto, array e function

//OBJETO
var person = { 
    "name": "Thiago",
    "age": 27,
    "heigth" : 1.75
}

//Array
var students = ["Simara", "Maria", "Joao"];

//Function
function sum(a,b){
    return a+b;
}


myName = "Atribuindo variavel myName";
yourName = "Atribuindo variavel yourName";

console.log(myName);
console.log(yourName);
console.log(age);
console.log(pattern);

console.log(isName);
console.log(myAge);
console.log(heigth);
console.log(isStudent);

console.log(sum(5,10));
//console.log(idade);

console.log(typeof sum);
console.log(typeof students);
console.log(typeof person);



// ############################
//Operadores Aritimeticos
//Adicao +
var sumNumber = 10+5;
console.log(sumNumber);

//Subtracao -
var subNumber = 10-5;
console.log(subNumber);

//Multiplicacao
var multNumber = 10*5;
console.log(multNumber);

//Divisao
var divNumber = 10/5;
console.log(divNumber);

//Modulo (resto da divisao)
var modNumber = 10%3;
console.log(modNumber);

//Incremento ++
var incNumber = 1;
console.log(incNumber);
incNumber++;
console.log(incNumber);

//Decremento --
var decNumber = 5;
console.log(decNumber);
decNumber--;
console.log(decNumber);
// ############################




// ############################
//Operadores de Atribuicao
var x = 1, y = 14;
console.log(x+=y); //Mesma coisa: console.log(x=x+y);
console.log(x-=y);
console.log(x*=y);
console.log(x/=y);

var x = 1, y = 14;
console.log(x=x+y);
// ############################


// ############################
//Operacao de Comparacao

// == Valores Iguais
// === Valores e Tipos Iguais
// != Diferente
// > Maior
// < Menor
// >= Maior ou Igual
// <= Menor ou Igual

// ############################



// ############################
//Operacao Logicos

// &&    E
// ||    OU
// !     NEGACAO

var num = 5;

if (num == 1) {
    console.log("num é igual a 1");
} else if (num == 2) {
    console.log("num é igual a 2");
} else {
    console.log("num nao é igual a",num, "ok?");
}

// ############################

var mes = "abril";

switch (mes) {
    case "fevereiro":
        console.log("mes 2");
        break;
    case "marco":
        console.log("mes 3");
        break;
    case "abril":
        console.log("mes 4");
        break;
    default:
        console.log("caiu na excecao!");
}

// ############################
// ESTRUTURA DE REPETICAO
// ############################

//FOR
var colors = ["black","white","yellow","green","blue"];

for (var i = 0;  i < colors.length; i++){
    console.log(colors[i]);
};

for (var i = 1;  i <= 10; i++){
    console.log(i);
};


//WHILE
var i = 0;

while (i <= 10){
    console.log("While é", i);
    i++;
};

//DO WHILE
var i = 0;

do {
    console.log("Do While é", i);
    i++;
} while (i <= 10);

// ############################
// FUNCOES
// ############################

function sayHello(name, lastname){
    console.log('Hello ' + name + ' ' + lastname);
}

sayHello("Thiago", "Teberga");

function sumNumbe(a, b){
    return a + b;
}

console.log(sumNumbe(34, 65));