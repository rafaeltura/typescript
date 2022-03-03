const numero1 = document.querySelector("#numero1") as HTMLInputElement;
const numero2 = document.querySelector("#numero2") as HTMLInputElement;
const btnCalcular = document.querySelector("#calcular");
const divResultado = document.querySelector("#resultado");

function somar(n1: number, n2: number) {
    return n1 + n2;   
}

btnCalcular.addEventListener('click', _ => {
    divResultado.innerHTML = somar( Number( numero1.value ), Number( numero2.value ) ).toString();
})