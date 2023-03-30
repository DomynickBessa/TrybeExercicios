let clientesTrybeBank = ['Ada', 'john', 'Gus'];

function adicionaClientes(cliente){
    if (typeof cliente === 'string'){
        clientesTrybeBank.push(cliente);
        return "Cliente adicionado(a) com sucesso."

    }else{
        return "Elemento não autorizado, deve conter o tipo string"
    }
}

function deleteClientes (cliente){
    if (typeof cliente === 'string'){
        clientesTrybeBank.pull
    }
    return
}

console.log(adicionaClientes(true));
console.log(adicionaClientes("Iago Lopes"));
console.log(clientesTrybeBank);