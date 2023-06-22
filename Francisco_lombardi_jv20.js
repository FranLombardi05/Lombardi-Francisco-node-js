function summation(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
  /*
  La función recibe un número n como parámetro y utiliza un bucle for para sumar todos los números desde 1 hasta n. El resultado de la suma se va acumulando en la variable sum. Finalmente, se devuelve el valor de sum, que es la sumatoria de todos los números anteriores a n, incluyendo n mismo.
  
  Para el ejemplo dado en la pregunta, se puede llamar a la función de esta manera:
  
  summation(3); // Devuelve 6
  summation(8); // Devuelve 36
  */