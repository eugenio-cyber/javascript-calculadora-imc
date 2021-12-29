const button = document.getElementById("btn");

function calc() {

    const nome = document.getElementById("nome").value;
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;
    const moderro = document.getElementById("modal-erro");
    const modresult = document.getElementById("modal-resultado");
    var select = document.getElementById("sexo");
    var value = select.options[select.selectedIndex].value;

    if(nome !== "" && peso !== "" && altura !== "" && value !== "vazio") {

        const IMC = (peso / (altura * altura)).toFixed(1);

        if(IMC < 18.5) {

            if(modresult) {

                const nome2 = document.getElementById("nome2");
                const resultado = document.getElementById("resultado");
                resultado.innerHTML = "Magreza";

                modresult.classList.add("mostrar");
                modresult.addEventListener("click", (e) => {

                    if(e.target.id == "modal-erro" || e.target.classList == "fechar") {

                        modresult.classList.remove("mostrar");
                        window.location.reload()

                    }
                    
                })

            }

        } else if(IMC >= 18.5 && IMC <= 24.9) {

            if(modresult) {

                const nome2 = document.getElementById("nome2");
                const resultado = document.getElementById("resultado");
                resultado.innerHTML = "Normal";

                modresult.classList.add("mostrar");
                modresult.addEventListener("click", (e) => {

                    if(e.target.id == "modal-erro" || e.target.classList == "fechar") {

                        modresult.classList.remove("mostrar");
                        window.location.reload()

                    }
                    
                })

            }

        } else if(IMC >= 25.0 && IMC <= 29.9) {

            if(modresult) {

                const nome2 = document.getElementById("nome2");
                const resultado = document.getElementById("resultado");
                resultado.innerHTML = "Sobrepeso";

                modresult.classList.add("mostrar");
                modresult.addEventListener("click", (e) => {

                    if(e.target.id == "modal-erro" || e.target.classList == "fechar") {

                        modresult.classList.remove("mostrar");
                        window.location.reload()

                    }
                    
                })

            }

        } else if(IMC >= 30.0 && IMC <= 39.9) {

            if(modresult) {

                const nome2 = document.getElementById("nome2");
                const resultado = document.getElementById("resultado");
                resultado.innerHTML = "Obesidade";

                modresult.classList.add("mostrar");
                modresult.addEventListener("click", (e) => {

                    if(e.target.id == "modal-erro" || e.target.classList == "fechar") {

                        modresult.classList.remove("mostrar");
                        window.location.reload()

                    }
                    
                })

            }

        } else if(IMC > 40.0) {

            if(modresult) {

                const nome2 = document.getElementById("nome2");
                const resultado = document.getElementById("resultado");
                resultado.innerHTML = "Obesidade Grave";

                modresult.classList.add("mostrar");
                modresult.addEventListener("click", (e) => {

                    if(e.target.id == "modal-erro" || e.target.classList == "fechar") {

                        modresult.classList.remove("mostrar");
                        window.location.reload()

                    }
                    
                })

            }

        }

    } else {
        
        if(moderro) {

            const nn = document.getElementById("nome2");
            nn.innerHTML = nome;

            moderro.classList.add("mostrar");
            moderro.addEventListener("click", (e) => {

                if(e.target.id == "modal-erro" || e.target.classList == "fechar") {

                    moderro.classList.remove("mostrar");

                }
                
            })
        }

    }
}

button.addEventListener("click", calc);