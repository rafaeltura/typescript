const numero1 = document.querySelector("#numero1");
const numero2 = document.querySelector("#numero2");
const btnCalcular = document.querySelector("#calcular");
const divResultado = document.querySelector("#resultado");

function somar(n1, n2) {
    /**
     * Caso não tenha essa validação do type dos args que estão sendo recebidos, possivelmente iria quebrar/concatenar o cálculo. Com o TS se tem a certeza do tipo que se espera dos args, então não precisaria fazer nenhuma validação/casting, apenas retornar a soma diretamente.
     */
    if(typeof n1 == 'number' && typeof n2 == 'number'){
        return n1 + n2;
    }else {
        return parseFloat(n1) + parseFloat(n2);
    }
    
}

btnCalcular.addEventListener('click', _ => {
    divResultado.innerHTML = somar(numero1.value, numero2.value);
})