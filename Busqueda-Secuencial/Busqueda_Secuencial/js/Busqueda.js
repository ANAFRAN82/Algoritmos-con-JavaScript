const Buscar =()=> {
    let n = parseInt(document.getElementsByName("txtCantidad")[0].value);
    let arreglo = [];

    for (let i = 0; i < n; i++) {
        let elemento = parseInt(prompt("Ingrese el elemento " + (i + 1)));
        arreglo.push(elemento);
    }
    
    let mensaje = "Arreglo ingresado:\n";
    for (let i = 0; i < n; i++) {
        mensaje += "Posición " + (i) + ": " + arreglo[i] + "\n";
       
    }
    alert(mensaje);

    let b = parseInt(prompt("Ingrese el elemento a buscar"))
    let posicionEncontrada = -1;

    for (let i = 0; i < n; i++) {
        if (arreglo[i] === b) {
            posicionEncontrada = i;
            break;
        }
    }

    let mens = "Arreglo:\n";
    for (let i = 0; i < n; i++) {
        mens+= "Posición " + (i) + ": " + arreglo[i] + "\n";
    }


    if (posicionEncontrada !== -1) {
        mens += ("\nEl número " + b + " fue encontrado en la posición " + (posicionEncontrada));
    } else {
        mens += ("\nEl número " + b + " no fue encontrado en el arreglo.");
    } 
    alert (mens);
}


