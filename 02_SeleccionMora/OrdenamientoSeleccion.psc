Algoritmo OrdenamientoSeleccion
	Definir n, i, j, min, temp Como Entero
	Dimensionar arr(100)
	Escribir 'Ingresa el tamaño del arreglo: '
	Leer n
	Para i<-1 Hasta n Hacer
		Escribir 'Ingresa el elemento ', i, ' del arreglo: '
		Leer arr[i]
	FinPara
	Para i<-1 Hasta n-1 Hacer
		min <- i
		Para j<-i+1 Hasta n Hacer
			Si arr[j]<arr[min] Entonces
				min <- j
			FinSi
		FinPara
		temp <- arr[i]
		arr[i] <- arr[min]
		arr[min] <- temp
	FinPara
	Escribir 'Arreglo ordenado:'
	Para i<-1 Hasta n Hacer
		Escribir arr[i]
	FinPara
FinAlgoritmo
