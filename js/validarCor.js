function validarCor(resultado) {
    document.querySelector("#resultado").innerHTML = resultado;
    resultado >= 0? document.getElementById("resultado").style.color = "green" : document.getElementById("resultado").style.color = "red"
}