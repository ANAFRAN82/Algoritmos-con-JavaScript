// Declarar el array a en el ámbito global
var a = [];

const ingresar = () => { 
    let n = parseInt(document.getElementsByName('txtCantidad')[0].value)

    if (isNaN(n) || n <= 0) {
        alert('Ingrese cantidad de elementos válida');
        return;
    }

    // Limpiar el array antes de llenarlo nuevamente
    a = [];

    for (c = 0; c < n; c++) {
        elemento = parseInt(prompt('Ingrese el elemento'));  
        a.push(elemento);
    } 
}

const procesarArray = () => {
    console.log('Array recibido:', a);
    alert('Array recibido:\n' + a.join(', '));
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = 'Array recibido: ' + a.join(', ');
}

const ordenarSeleccion = () => {
    for (let i = 0; i < a.length - 1; i++) {
        let minIndex = i;
        
        for (let j = i + 1; j < a.length; j++) {
            if (a[j] < a[minIndex]) {
                minIndex = j;
            }
        }
        
        if (minIndex !== i) {
            // Intercambiar los valores en las posiciones i y minIndex
            let temp = a[i];
            a[i] = a[minIndex];
            a[minIndex] = temp;
        }
    }
    alert('Array ordenado por selección: ' + a);
    var outputDiv = document.getElementById('output2');
    outputDiv.innerHTML = 'Array recibido: ' + a.join(', ');
}

const borrarArray = () => {
    a = [];   

    // Borrar el contenido del input "txtCantidad"
    var inputCantidad = document.getElementsByName('txtCantidad')[0];
    inputCantidad.value = '';

    // Borrar el contenido mostrado en el div de salida
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = ('Array borrado');
    var outputDiv = document.getElementById('output2');
    outputDiv.innerHTML = ('Array borrado');
    alert('Array y cantidad borrados');
}