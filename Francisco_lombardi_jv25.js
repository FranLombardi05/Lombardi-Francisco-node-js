function sumArray(arr, num) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      const sum = arr[left] + arr[right];
      if (sum === num) {
        return true;
      } else if (sum < num) {
        left++;
      } else {
        right--;
      }
    }
  
    return false;
  }
  /*
  console.log(sumArray([2, 5, 7, 10, 11, 15, 20], 13)); // true
  console.log(sumArray([2, 5, 7, 10, 11, 15, 20], 14)); // false
  La función utiliza el algoritmo de "two pointers" para encontrar una combinación de dos números en el
   arreglo que sumen el número dado como segundo parámetro. La idea es tener dos punteros que apunten al comienzo y al final del arreglo, y luego ir moviendo los punteros hacia el centro según corresponda, comparando la suma de los valores apuntados por ambos punteros en cada paso. Si la suma es igual al número buscado, se devuelve true. 
  Si no se encuentra ninguna combinación que sume el número buscado, se devuelve false.*/