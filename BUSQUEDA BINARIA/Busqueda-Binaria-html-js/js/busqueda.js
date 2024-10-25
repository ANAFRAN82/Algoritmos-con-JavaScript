let elementos = []; // Array para almacenar los elementos ingresados

    function ingresarElementos() {
      // Obtener el número de elementos del input con id "numElementos"
      const numElementos = document.getElementById("numElementos").value;
      // Pedir al usuario que ingrese los elementos
      for (let i = 0; i < numElementos; i++) {
        // Mostrar un prompt para que el usuario ingrese el elemento
        const elemento = prompt("Ingrese el elemento de la posición [" + i + "]:");
        // Convertir el elemento a un número y agregarlo al array de elementos
        elementos.push(Number(elemento));
      }
      // Ordenar los elementos utilizando el método de ordenamiento por burbuja
      ordenamientoBurbuja(elementos);
      // Mostrar los elementos en la lista con id "listaElementos"
      const listaElementos = document.getElementById("listaElementos");
      listaElementos.innerHTML = "";
      for (let i = 0; i < elementos.length; i++) {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(elementos[i]));
        listaElementos.appendChild(li);
      }
    }

    function buscarNumero() {
      // Obtener el número buscado del input con id "numeroBuscado"
      const numeroBuscado = document.getElementById("numeroBuscado").value;
      // Realizar la búsqueda binaria
      let inicio = 0;
      let fin = elementos.length - 1;
      let encontrado = false;
      let posicion = -1; // Variable para almacenar la posición del elemento encontrado
      while (inicio <= fin && !encontrado) {
        const medio = Math.floor((inicio + fin) / 2);
        if (elementos[medio] === Number(numeroBuscado)) {
          encontrado = true;
          posicion = medio; // Almacenar la posición del elemento encontrado
        } else if (elementos[medio] < Number(numeroBuscado)) {
          inicio = medio + 1;
        } else {
          fin = medio - 1;
        }
      }
      // Mostrar el resultado de la búsqueda
      if (encontrado) {
        alert("El número " + numeroBuscado + " fue encontrado en la posición " + posicion + " del array.");
      } else {
        alert("El número " + numeroBuscado + " no fue encontrado en la lista.");
      }
    }

    function ordenamientoBurbuja(numeros) {
      // Recorrer la lista de elementos
      for (let i = 0; i < numeros.length; i++) {
        for (let j = 0; j < numeros.length - 1; j++) {
          // Si el elemento actual es mayor que el siguiente, intercambiarlos
          if (numeros[j] > numeros[j + 1]) {
            const temp = numeros[j];
            numeros[j] = numeros[j + 1];
            numeros[j + 1] = temp;
          }
        }
      }
      // No es necesario devolver la lista de elementos ordenados, ya que se ordenan en el array "elementos"
    }