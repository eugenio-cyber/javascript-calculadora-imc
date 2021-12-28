function calc() {

    const nome = document.getElementById("nome").value;
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;
    var select = document.getElementById("sexo");
    var value = select.options[select.selectedIndex].value;

    const IMC = (peso / (altura * altura)).toFixed(1);

    if(IMC < 18.5) {

        alert("MAGREZA")

    } else if(IMC >= 18.5 && IMC <= 24.9) {

        alert("NORMAL")

    } else if(IMC >= 25.0 && IMC <= 29.9) {

        alert("SOBREPESO")

    } else if(IMC >= 30.0 && IMC <= 39.9) {

        alert("OBESIDADE")

    } else if(IMC > 40.0) {

        alert("OBESIDADE GRAVE")

    }
}