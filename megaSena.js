let numerosJogador = [12,22,29,35,55,59];
console.log( numerosJogador);
//console.log(numeroJogador.length) -- mostra o tamanho do array
//Math.random ()
let numero1 = Math.floor(Math.random() *60);
let numero2 = Math.floor(Math.random() *60);
let numero3 = Math.floor(Math.random() *60);
let numero4 = Math.floor(Math.random() *60);
let numero5 = Math.floor(Math.random() *60);
let numero6 = Math.floor(Math.random() *60);

let numerosSorteados = [numero1, numero2, numero3, numero4, numero5, numero6];
console.log(numerosSorteados);

console.log("Números escolhidos: " + numerosJogador);
console.log("Números Sorteados: " + numerosSorteados);

//comparando os números escolhidos com os numeros sorteados usando o for;   

//for (inicialização; condição de parada; quais os passos durante o processo) {}

for (let index = 0; index < 6; index + 1){
    console.log(numerosSorteados[index]);
}

