function rango(start, end, step) {
    let result = [];
    let current = start;
    while (current <= end) {
      result.push(current);
      current += step;
    }
    return result;
  }
  /*
  La función utiliza un bucle while para iterar desde el número de inicio hasta el número final, agregando cada número al resultado y luego aumentando la iteración por el valor del sumador.
  
  Para el ejemplo dado en la pregunta, se puede llamar a la función de esta manera:

  rango(1, 10, 3); // Devuelve [1, 4, 7, 10]
  */
  
  
  
  
  
  