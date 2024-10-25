Algoritmo OrdenamientoRadix
	
Procedimiento OrdenacionRadix(var arr: arreglo de enteros)
Función ObtenerDigito(num: entero, digito: entero): entero
			Devolver truncar(abs(num) / 10^digito) % 10
FinFunción

Función ContarDigitos(num: entero): entero
        Si num = 0 Entonces
            Devolver 1
        Sino
            Devolver truncar(log10(abs(num))) + 1
        FinSi
FinFunción

Función ContarMaxDigitos(arr: arreglo de enteros): entero
        maxDigitos := 0
        Para i desde 0 hasta longitud(arr) - 1 Hacer
            maxDigitos := máximo(maxDigitos, ContarDigitos(arr[i]))
        FinPara
        Devolver maxDigitos
FinFunción

maxDigitos := ContarMaxDigitos(arr)
Para k desde 0 hasta maxDigitos - 1 Hacer
	cubetas := nuevo arreglo de listas de enteros con 10 elementos
	Para i desde 0 hasta longitud(arr) - 1 Hacer
		digito := ObtenerDigito(arr[i], k)
		Agregar(arr[i], cubetas[digito])
	FinPara
	arr := concatenar todas las listas en cubetas
FinPara
FinProcedimiento

Procedimiento Principal
arregloDesordenado: arreglo de enteros
tamaño: entero
número: entero
	
    Escribir "Ingrese el tamaño del arreglo:"
    Leer tamaño
    arregloDesordenado := nuevo arreglo de enteros con tamaño elementos
	
    Para i desde 0 hasta tamaño - 1 Hacer
        Escribir "Ingrese el número ", i + 1, ":"
        Leer número
        arregloDesordenado[i] := número
    FinPara
	
    OrdenacionRadix(arregloDesordenado)
	
    Escribir "Array Desordenado:"
    Para i desde 0 hasta tamaño - 1 Hacer
        Escribir arregloDesordenado[i]
    FinPara
	
    Escribir "Array Ordenado:"
    Para i desde 0 hasta tamaño - 1 Hacer
        Escribir arregloDesordenado[i]
    FinPara
FinProcedimiento

