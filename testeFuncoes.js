
function calcularMedia (array) {
    let soma = 0;
    for ( numero of array){
        soma += numero;
    }


let media = soma / array.length;
return media;
}

let notasPessoasEstudante1 = [ 8, 7, 2, 6, 10];