function valida() {
    if (document.getElementById("num1").value === "" || document.getElementById("num2").value === "") {
        alert("Valor não informado");
        return false;
    } 
    return true;
}