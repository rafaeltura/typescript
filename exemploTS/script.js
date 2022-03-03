var numero1 = document.querySelector("#numero1");
var numero2 = document.querySelector("#numero2");
var btnCalcular = document.querySelector("#calcular");
var divResultado = document.querySelector("#resultado");
function somar(n1, n2) {
    return n1 + n2;
}
btnCalcular.addEventListener('click', function (_) {
    divResultado.innerHTML = String(somar(Number(numero1.value), Number(numero2.value)));
});
