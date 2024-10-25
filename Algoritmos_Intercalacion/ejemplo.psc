Algoritmo intercalacion
	Definir max Como Entero
	max <- 5
	Definir v1, v2, v3 Como Entero
	Dimensionar v1(max), v2(max), v3(max+max)
	n1 <- 0
	n2 <- 0
	n3 <- 0
	Escribir '***Cargando vector 1***'
	Para i<-1 Hasta max Hacer
		Leer v1[i]
		n1 <- n1+1
	FinPara
	ordenado <- Falso
	Mientras ordenado=Falso Hacer
		ordenado <- Verdadero
		Para j<-1 Hasta n1-1 Hacer
			Si v1[j]>v1[j+1] Entonces
				aux <- v1[j]
				v1[j] <- v1[j+1]
				v1[j+1]<-aux
				ordenado <- Falso
			FinSi
		FinPara
	FinMientras
	Para i<-1 Hasta n1 Hacer
		Escribir v1[i]
	FinPara
	Escribir '***Cargando vector 2***'
	Para i<-1 Hasta max Hacer
		Leer v2[i]
		n2 <- n2+1
	FinPara
	ordenado <- Falso
	Mientras ordenado=Falso Hacer
		ordenado <- Verdadero
		Para j<-1 Hasta n2-1 Hacer
			Si v2[j]>v2[j+1] Entonces
				aux <- v2[j]
				v2[j] <- v2[j+1]
				v2[j+1]<-aux
				ordenado <- Falso
			FinSi
		FinPara
	FinMientras
	Para i<-1 Hasta n2 Hacer
		Escribir v2[i]
	FinPara
	i <- 1
	j <- 1
	k <- 0
	Mientras i<=n1 Y j<=n2 Hacer
		Si v1[i]<v2[j] Entonces
			k <- k+1
			v3[k] <- v1[i]
			i <- i+1
		SiNo
			k <- k+1
			v3[k] <- v2[j]
			j <- j+1
		FinSi
	FinMientras
	Mientras i<=n1 Hacer
		k <- k+1
		v3[k] <- v1[i]
		i <- i+1
	FinMientras
	Mientras j<=n2 Hacer
		k <- k+1
		v3[k] <- v2[j]
		j <- j+1
	FinMientras
	n3 <- k
	Escribir '*** Intercalacion ***'
	Para k<-1 Hasta n3 Hacer
		Escribir v3[k]
	FinPara
FinAlgoritmo
