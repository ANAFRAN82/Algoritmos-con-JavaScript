Algoritmo OrdenamientoRadix
	
Procedimiento OrdenacionRadix(var arr: arreglo de enteros)
Funci�n ObtenerDigito(num: entero, digito: entero): entero
			Devolver truncar(abs(num) / 10^digito) % 10
FinFunci�n

Funci�n ContarDigitos(num: entero): entero
        Si num = 0 Entonces
            Devolver 1
        Sino
            Devolver truncar(log10(abs(num))) + 1
        FinSi
FinFunci�n

Funci�n ContarMaxDigitos(arr: arreglo de enteros): entero
        maxDigitos := 0
        Para i desde 0 hasta longitud(arr) - 1 Hacer
            maxDigitos := m�ximo(maxDigitos, ContarDigitos(arr[i]))
        FinPara
        Devolver maxDigitos
FinFunci�n

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
tama�o: entero
n�mero: entero
	
    Escribir "Ingrese el tama�o del arreglo:"
    Leer tama�o
    arregloDesordenado := nuevo arreglo de enteros con tama�o elementos
	
    Para i desde 0 hasta tama�o - 1 Hacer
        Escribir "Ingrese el n�mero ", i + 1, ":"
        Leer n�mero
        arregloDesordenado[i] := n�mero
    FinPara
	
    OrdenacionRadix(arregloDesordenado)
	
    Escribir "Array Desordenado:"
    Para i desde 0 hasta tama�o - 1 Hacer
        Escribir arregloDesordenado[i]
    FinPara
	
    Escribir "Array Ordenado:"
    Para i desde 0 hasta tama�o - 1 Hacer
        Escribir arregloDesordenado[i]
    FinPara
FinProcedimiento

