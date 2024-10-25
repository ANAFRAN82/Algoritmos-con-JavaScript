def counting_sort(arr, exp):
    n = len(arr)
    output = [0] * n
    count = [0] * 10

    for i in range(n):
        index = arr[i] // exp
        count[index % 10] += 1

    for i in range(8, -1, -1):  # Cambio aquí: Recorremos el rango en orden descendente
        count[i] += count[i + 1]  # Cambio aquí: Sumamos el valor siguiente

    i = n - 1
    while i >= 0:
        index = arr[i] // exp
        output[count[index % 10] - 1] = arr[i]
        count[index % 10] -= 1
        i -= 1

    for i in range(n):
        arr[i] = output[i]

def radix_sort(arr):
    max_value = max(arr)
    exp = 1
    while max_value // exp > 0:
        counting_sort(arr, exp)
        exp *= 10

# Ejemplo de uso
arr = [170, 45, 75, 90, 802, 24, 2, 66]
radix_sort(arr)

print("Arreglo ordenado:", arr)
