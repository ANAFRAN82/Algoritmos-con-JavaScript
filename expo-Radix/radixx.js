function obtenerDigito(num, digito) {
    return Math.floor(Math.abs(num) / Math.pow(10, digito)) % 10;
  }
  
  function contarDigitos(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  }
  
  function contarMaxDigitos(arr) {
    let maxDigitos = 0;
    for (let i = 0; i < arr.length; i++) {
      maxDigitos = Math.max(maxDigitos, contarDigitos(arr[i]));
    }
    return maxDigitos;
  }
  
  function ordenacionRadix(arr) {
    const maxDigitos = contarMaxDigitos(arr);
    for (let k = 0; k < maxDigitos; k++) {
      const cubetas = Array.from({ length: 10 }, () => []);
      for (let i = 0; i < arr.length; i++) {
        const digito = obtenerDigito(arr[i], k);
        cubetas[9 - digito].push(arr[i]);  // Cambio aquí: Usamos "9 - digito" para invertir el orden
      }
      arr = [].concat(...cubetas);
    }
    return arr;
  }
  
  function ordenarRadix() {
    const size = parseInt(document.getElementById("array-size").value);
    const arrayDesordenado = [];
  
    for (let i = 0; i < size; i++) {
      const number = parseInt(prompt(`Ingresa el número ${i + 1}:`));
      arrayDesordenado.push(number);
    }
  
    const arrayOrdenado = ordenacionRadix(arrayDesordenado);
  
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `
      <p>Array Desordenado: ${arrayDesordenado.join(", ")}</p>
      <p>Array Ordenado: ${arrayOrdenado.join(", ")}</p>
    `;
  }