/*
exercicio 1
resposta: vai imprimir 
10
10 5

exercicio 2
resposta: vai imprimir
10 10 10


exercicio 3
resposta:

let horasDia = prompt("Quantas horas você trabalha por dia?")
let recebeDia = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`) 

*/



//exercicio 1 codigo
let nome 
let idade 

console.log (typeof nome)
console.log (typeof idade)

// nas duas variaveis deu undefined, por que não nehum valor atribuido

nome = prompt("qual é sue nome")
idade = prompt("qual é sua idade")
console.log (typeof nome)
console.log (typeof idade )

//agora as duas variaveis mudaram para strings

console.log ("olá",nome,", voce tem",idade,"anos.")

//exercicio 2 codigo

let pergunta1 = prompt("VOCE ESTA USANDO ROUPA AZUL HOJE? só responder com sim ou nao")
let pergunta2 = prompt("VOCE ESTA DE  PE?só responder com sim ou nao")
let pergunta3 = prompt("VOCE ESTA NA ESCOLA? só responder com sim ou nao")

console.log ("VOCE ESTA USANDO ROUPA AZUL HOJE?", pergunta1)
console.log ("VOCE ESTA DE PE?", pergunta2)
console.log ("VOCE ESTA NA ESCOLA?", pergunta3) 

//exercicio 3 codigo

let a = 10
let b = 25
let c = 0

c = a
a = b
b = c


console.log (a,b)

console.log ("agora o valor de a é",a)
console.log("agora o valor de b é",b)

