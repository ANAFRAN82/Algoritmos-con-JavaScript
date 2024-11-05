function sortArray() {
  const input = document.getElementById("inputArray").value;
  const arr = input.split(",").map(Number);
  let tipoMetodo =  document.getElementsByName('cmbMetodo')[0].value;
  let tipoOrden =  document.getElementsByName('cmbOrden')[0].value;
  switch(tipoMetodo){
    case"INTERCAMBIO":
    console.log("SELECCIONASTE POR INTERCAMBIO")
    if(tipoOrden == "ascendente"){
      intercambioA(arr)
      console.log("SELECCIONASTE ASCENDENTE")
    }else{
      intercambioD(arr)
      console.log("SELECCIONASTE DESCENDENTE")
    }
    break;
    case "BURBUJA":
    console.log("SELECCIONASTE BURBUJA")
    if(tipoOrden == "ascendente"){
      console.log("SELECCIONASTE ASCENDENTE")
      burbujaA(arr)
    }else{
      console.log("SELECCIONASTE DESCENDENTE")
      burbujaD(arr)
    }
    break;
    default:
        console.log("NO SELECCIONO")
  }

  const output = document.getElementById("outputArray");
  output.textContent = "ARREGLO ORDENADO: " + arr.join(", ");
}

function burbujaA(arr) {
  const n = arr.length;
  let aux;
  for (let i=0; i<n-1; i++) {
      for (let j=0; j<n-i-1; j++) {
          if (arr[j+1] < arr[j]) {
            aux = arr[j+1];
            arr[j+1] = arr[j];
            arr[j] = aux;
          }
      }
  }
}
function burbujaD(arr) {
  const n = arr.length;
  let aux;
  for (let i=0; i<n-1; i++) {
      for (let j=0; j < n-i-1; j++) {
          if (arr[j+1] > arr[j]) {
            aux = arr[j+1];
            arr[j+1] = arr[j];
            arr[j] = aux;
          }
      }
  }
}
function intercambioA(arr) {
  const n = arr.length;
  let aux;
  for (let i=0; i<n; i++) {
      for (let j=i+1; j<n; j++) {
          if (arr[i] > arr[j]) {
            aux = arr[i];
            arr[i] = arr[j];
            arr[j] = aux;  
          }
      }
  }
}
function intercambioD(arr) {
  const n = arr.length;
  let aux;
  for (let i=0; i<n; i++) {
      for (let j=i+1; j<n; j++) {
          if (arr[i] < arr[j]) {
            aux = arr[i];
            arr[i] = arr[j];
            arr[j] = aux;
          }
      }
  }
}
