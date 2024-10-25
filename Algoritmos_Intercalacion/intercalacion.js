document.addEventListener("DOMContentLoaded", function () {
    const max = 5;
    let v1 = new Array(max);
    let v2 = new Array(max);
    let v3 = new Array(max + max);
    let n1 = 0;
    let n2 = 0;
    let n3 = 0;
// se llama el boton para que ingresar valores
    const cargarVectoresButton = document.getElementById("cargarVectores");
    cargarVectoresButton.addEventListener("click", function () {
        for (let i = 0; i < max; i++) {
            v1[i] = parseInt(prompt("Ingrese un valor para vector 1 en la posicion " + i + ": "));
            n1++;
        }

        for (let i = 0; i < max; i++) {
            v2[i] = parseInt(prompt("Ingrese un valor para vector 2 en la posicion " + i + ": "));
            n2++;
        }
        alert("Vectores cargados correctamente.");
    });
    
    const intercalarButton = document.getElementById("intercalar");
    intercalarButton.addEventListener("click", function () {
        // Ordenar v1 si la posicion 1 del v2 es menor se intercambia
        let ordenado = false;
        while (!ordenado) {
            ordenado = true;
            for (let j = 0; j < n1 - 1; j++) { 
                if (v1[j] > v1[j + 1]) {
                    const aux = v1[j];
                    v1[j] = v1[j + 1];
                    v1[j + 1] = aux;
                    ordenado = false;
                }
            }
        }

        ordenado = false;
        while (!ordenado) {
            ordenado = true;
            for (let j = 0; j < n2 - 1; j++) {
                if (v2[j] > v2[j + 1]) {
                    const aux = v2[j];
                    v2[j] = v2[j + 1];
                    v2[j + 1] = aux;
                    ordenado = false;
                }
            }
        }

        // Intercalación
        let i = 0;
        let j = 0;
        let k = 0;
        while (i < n1 && j < n2) {
            if (v1[i] < v2[j]) {
                k++;
                v3[k] = v1[i];
                i++;
            } else {
                k++;
                v3[k] = v2[j];
                j++;
            }
        }

        while (i < n1) {
            k++;
            v3[k] = v1[i];
            i++;
        }
        while (j < n2) {
            k++;
            v3[k] = v2[j];
            j++;
        }

        n3 = k;
        // Mostrar resultado
        const resultadoDiv = document.getElementById("resultado");
        resultadoDiv.innerHTML = "<p>*** Intercalación ***</p>";

        for (let k = 1; k <= n3; k++) {
            resultadoDiv.innerHTML += "<p>" + v3[k] + "</p>";
        }
    });
});