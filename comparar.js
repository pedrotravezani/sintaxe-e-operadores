function comparaNumeros(num1, num2){
    if(!num1 || !num2) return 'Defina dois números'
    const primeiraFrase = criaPrimeiraFrase (num1,num2)
    const segundaFrase = criaSegundaFrase(num1,num2)

    return `${primeiraFrase} ${segundaFrase}`
}

function criaPrimeiraFrase(num1,num2){
    let saoIguais = '';
    if(num1 !== num2){
    saoIguais = 'não';
}

return `Os numeros ${num1} e ${num2} ${saoIguais} são iguais.`
};


function criaSegundaFrase(num1,num2){
    const soma = num1 + num2;
    let comparar10 = '';
    let comparar20 = '';

if (soma > 10){
    comparar10 = 'maior';

}else{
    comparar10 = 'menor'
}

if (soma > 20){
    comparar20 = 'maior';
}else{
    comparar20 = 'menor'
}

return `Sua soma é ${soma}, que é ${comparar10} que 10 e ${comparar20} que 20`


}

console.log(comparaNumeros (1,0));














// function verificarnum(num1,num2){
//    const saoIguais = num1 === num2;
//    const soma = num1 + num2; 

//    return saoIguais, soma;







// // if (saoIguais){
// //     return "São iguais";
// //    }
// //    return"Não são iguais";

// // return saoIguais ? "São iguais" : "Não são iguais";

// }


