function calculo() {

    const valor1 = parseFloat(document.querySelector("#num1").value);
    const valor2 = parseFloat(document.querySelector("#num2").value);

    if (document.getElementById("Selecao").value == "") {
        alert("Selecione uma operação");
    }
    if (document.getElementById("Selecao").value == "soma") {
        if (valida()) {
            validarCor(somar(valor1, valor2));
        }
    }
    if (document.getElementById("Selecao").value == "subtrair") {
        if (valida()) {
            validarCor(subtrair(valor1, valor2));
        }
    }
    if (document.getElementById("Selecao").value == "divisao") {
        if (valida()) {
            validarCor(dividir(valor1, valor2));
        }
    }
    if (document.getElementById("Selecao").value == "multiplicacao") {
        if (valida()) {
            validarCor(multiplicar(valor1, valor2));
        }
    }
}